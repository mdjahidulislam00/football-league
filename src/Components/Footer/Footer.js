import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Facebook from './image/Facebook.png'
import Youtube from './image/YouTube.png'
import Twitter from './image/Twitter.png'


const Footer = (props) => {
    const { strFacebook, strYoutube, strTwitter } = props.socialLink;

    return (
        <Container fluid>
            <Row className='text-center'>
                <Col className='col-12'>
                    <a href={`https://${strFacebook}`} target='blank'><Image style={{ width: '80px', margin: '20px' }} src={Facebook} alt='sosical media' /></a>
                    <a href={`https://${strYoutube}`} target='blank'> <Image style={{ width: '80px', margin: '20px' }} src={Youtube} alt='sosical media' /></a>
                    <a href={`https://${strTwitter}`} target='blank'><Image style={{ width: '80px', margin: '20px' }} src={Twitter} alt='sosical media' /></a>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;