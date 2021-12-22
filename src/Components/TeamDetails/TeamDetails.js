import React from 'react';
import { Container, Row, Col, Image, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMapMarkedAlt, faMapMarker, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import storeData from './storeData.json'
import Footer from '../Footer/Footer';

const TeamDetails = () => {
    const { countryName } = useParams();

    // i want to get data from api by useParams name/id, but this api not available for free now it's paid, that's why i store api json data and use FIND for Team Details
    // const [teamName, setTeamName] = useState([]);
    // useEffect(() => {
    //     fetch('https://www.thesportsdb.com/api/v1/json/2/lookupteam.php?id=133604')
    //         .then(res => res.json())
    //         .then(data => setTeamName(data.teams))
    // }, [ ]);

    const teamInfo = storeData.find(pd => pd.strTeam === countryName);
    const { strTeam, strAlternate, intFormedYear,
        strCountry,
        strTeamFanart3, strTeamFanart4,
        strTeamJersey, strStadiumThumb, strDescriptionEN,
        strStadiumDescription, strStadium,
        strStadiumLocation, intStadiumCapacity
    } = teamInfo;

    return (
        <Container fluid className="bg-secondary">
            <Container className='pt-3'>
                <Row className='bg-info rounded pt-3'>
                    <Col lg={6} md={6} xs={12} className='p-4 text-white'>
                        <h4><b> {strAlternate} </b></h4>
                        <h5> ({strTeam}) </h5>
                        <br />
                        <br />
                        <h6><FontAwesomeIcon icon={faMapMarkedAlt} /> Founded: {intFormedYear}</h6>
                        <h6> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry} </h6>
                        <h6> <FontAwesomeIcon icon={faFutbol} /> Stadium: {strStadium} </h6>
                        <h6> <FontAwesomeIcon icon={faMapMarker} /> Stadium Location: {strStadiumLocation} </h6>
                        <h6> <FontAwesomeIcon icon={faUsers} /> Stadium Capacity: {intStadiumCapacity} </h6>
                    </Col>
                    <Col lg={6} md={6} xs={12} className='col-lg-6 col-md-6 col-xm-12'>
                        <Image src={strTeamJersey} alt='logo' className='img-fluid p-4' style={{ width: '100%', height: '325px' }} />
                    </Col>
                </Row>
                <Row className='bg-info rounded mt-1'>
                    <Col lg={4} md={4} xs={12} > <Image className='img-fluid img-thumbnail my-3 ml-0' src={strTeamFanart3}></Image> </Col>
                    <Col lg={4} md={4} xs={12}> <Image className='img-fluid img-thumbnail my-3 ml-0' src={strStadiumThumb}></Image> </Col>
                    <Col lg={4} md={4} xs={12}> <Image className='img-fluid img-thumbnail my-3 ml-0' src={strTeamFanart4}></Image> </Col>
                </Row>
                <Row className='mt-3 p-0'>
                    <Col className='text-center '>
                        <h3 className='text-light p-2'>About Team</h3>
                        <p className='text-info'> {strDescriptionEN} </p>
                    </Col>
                </Row>
                <Row className='mt-5 p-0'>
                    <Col className='col-lg-12 text-center'>
                        <h3 className='text-light p-2'>About Stadium</h3>
                        <p  className='text-info'> {strStadiumDescription} </p>
                    </Col>
                </Row>
            </Container>
            <Row className='justify-content-center bg-dark'>
                <Col className='col-lg-12'>
                    <Footer socialLink={teamInfo} />
                </Col>
            </Row>
        </Container>

    );
};

export default TeamDetails;