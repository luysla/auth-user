import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';

import logo from '../../assets/draw.png'

import './FormLogin.css'

function FormLogin(){
    return(
        <Container className="text-center container">
            <img className="logo" src={logo} alt="Logo"/>
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Input type="email" placeholder="E-mail"/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" placeholder="Senha"/>
                        </FormGroup>
                        <a className="pass" href="#">Esqueceu sua senha?</a>
                        <Button className="button-login" color="success">Login</Button>
                    </Form>
                </Col>
            </Row>
            <p>Ainda não possui conta? <a href="#">Cadastre-se</a></p>
        </Container>
    );
}

export default FormLogin;