import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCart from '../TeamCart/TeamCart';

const Home = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, []);
    return (
        <Container fluid className="bg-secondary">
            <Container>
                <Row className='justify-content-center'>
                    {
                        team.map(teamsData => <Col className='col-lg-4 col-md-6 col-sm-12 text-center p-2'> <TeamCart teamsData={teamsData} /> </Col>)
                    }
                </Row>
            </Container>
            <Row className='bg-info mt-3'>
                <Col className='p-2 text-center'> &copy; Copyright 2021 reserve for JAHID  </Col>
            </Row>
        </Container>

    );
};

export default Home;