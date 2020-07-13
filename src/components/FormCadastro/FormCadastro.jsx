import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';

import logo from '../../assets/draw.png'
import './FormCadastro.css'
import firebase from '../../firebaseConfig';

function FormCadastro(){

const [email, setEmail] = useState('0');
const [senha, setSenha] = useState('0');

function handleChangeEmail(event){
    setEmail(event.target.value)
}

function handleChangeSenha(event){
    setSenha(event.target.value)
}

function cadastrar(){
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(function(user){
        
    })
    .catch(function(error) {
        console.log(error)
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
                        <Button className="button-login" color="success" onClick={cadastrar}>Cadastrar</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default FormCadastro;