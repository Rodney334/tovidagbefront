import React from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import guideImage from "../../../assets/images/landing/features/img-1.png"; // Assurez-vous de mettre le bon chemin de votre image
import './client.css'

const client = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={10}>
                    <Card className="shadow-sm">
                        <CardBody className="d-flex mx-2 flex-column flex-md-row">
                            <Col md={8}>
                                <h2 className="fw-bold as">GUIDE DE LA CITOYENNETE ET <br/> <b>DE LA DEMOCRATIE AU BENIN</b> </h2>
                                <p>
                                    Initié dans le cadre du projet TOVI DAGBĖ FƆ DIDĖ « Bon Citoyen », ce guide a été conçu pour être utilisé par tout béninois qui a besoin d’en apprendre plus pour devenir un citoyen exemplaire. Il se veut une contribution citoyenne à l’éducation de la population. Il s’adresse à tous les citoyens béninois notamment les jeunes pour les outiller sur les fondements de la démocratie et les institutions de la République.
                                </p>
                                <Button color="primary" className="btn-blue-night">
                                    En savoir +
                                </Button>
                            </Col>
                            <Col md={4} className="d-flex align-items-center justify-content-center">
                                <img src={guideImage} alt="Guide" className="img-fluid rounded" />
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default client;
