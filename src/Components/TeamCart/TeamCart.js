import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TeamCart = (props) => {
    const { strTeam, strTeamBadge, strCountry, strGender } = props.teamsData;
    return (
        <div>
            <Card className='mt-5 ' style={{ width: '20rem', marginLeft: '20px' }}>
                <Card.Img variant="top" src={strTeamBadge} className='p-5' />
                <Card.Body>
                    <Card.Title> <h4>{strTeam}</h4> </Card.Title>
                    <Card.Text>
                        <h6>Country: {strCountry}</h6>
                        <h6>Gender: {strGender}</h6>
                        <h6>PlayType: Football</h6>
                    </Card.Text>
                    <Link to={`/ClubDetails/${strTeam}`}><Button variant="primary">More Details <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamCart;