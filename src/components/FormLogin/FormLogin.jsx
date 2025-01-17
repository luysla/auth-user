import React, { useState } from 'react';
import { Link, BrowserRouter, Route, Router } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import HelloWorld from '../../pages/auth/HelloWorld';

import logo from '../../assets/draw.png'
import './FormLogin.css'
import firebase from '../../firebaseConfig';

function FormLogin(){
    
const [email, setEmail] = useState('0');
const [senha, setSenha] = useState('0');

function handleChangeEmail(event){
    setEmail(event.target.value)
}

function handleChangeSenha(event){
    setSenha(event.target.value)
}

function login(){
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(function(user){
        return (
            <Router>
            <Route component={ HelloWorld } path="/hello" />
        </Router>
        );
    })
    .catch(function(error) {
        alert("ERRO")
    });
}

    return(
        <Container className="text-center container">
            <img className="logo" src={logo} alt="Logo"/>
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Input type="email" name="email" placeholder="E-mail" onChange={handleChangeEmail}/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="senha" placeholder="Senha" onChange={handleChangeSenha}/>
                        </FormGroup>
                        <a className="pass" href="#">Esqueceu sua senha?</a>
                        <Button className="button-login" color="success" onClick={login}>Login</Button>
                    </Form>
                </Col>
            </Row>
            <BrowserRouter>
                <p>Ainda não possui conta? <Link to="/cadastro">Cadastre-se</Link></p>
            </BrowserRouter>
        </Container>
    );
}

export default FormLogin;