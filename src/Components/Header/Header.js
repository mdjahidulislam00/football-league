import React from 'react';
import './Header.css';
import logo from './Logo/English_Football_League_Logo.svg.png'
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <Container fluid className="text-white  text-center bg-primary">
            <Row id='header-row' className='justify-content-center '>
                <Col className='col-12 p-3'>
                    <img src={logo} className="rounded img-fluid" alt="logo" width="90" />
                    <h1 className="font-bold" style={{ color: 'red', fontWeight: 'bold', fontFamily: 'Alfa Slab' }}>English Premier League</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;