import React from "react";
import { CardBody, Row, Col, Card, CardHeader, Container } from "reactstrap";

const ComplaintDetails = ({ complaintData }) => {
  return (
    <div className="page-content">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xxl={9}>
            <Card id="demo">
              <Row>
                <Col lg={12}>
                  <CardHeader className="border-bottom-dashed p-4">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <div className="mt-sm-5 mt-4">
                          <h6 className="text-muted text-uppercase fw-semibold">
                            Détails de la plainte
                          </h6>
                        </div>
                      </div>
                      <div className="flex-shrink-0 mt-sm-0 mt-3">
                        <h6>
                          <span className="text-muted fw-normal">Numéro de plainte:</span> {complaintData.id}
                        </h6>
                        <h6>
                          <span className="text-muted fw-normal">Date:</span> {complaintData.date}
                        </h6>
                        <h6>
                          <span className="text-muted fw-normal">Heure:</span> {complaintData.time}
                        </h6>
                        <h6 className="mb-0">
                          <span className="text-muted fw-normal">Statut:</span> {complaintData.status}
                        </h6>
                      </div>
                    </div>
                  </CardHeader>
                </Col>
                <Col lg={12}>
                  <CardBody className="p-4">
                    <Row className="g-3">
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Nom
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData.lastName}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Prénom
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData.firstName}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Personne impliquée
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData.personInvolved}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Organisme concerné
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData.concernedOrganization}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Ville
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData.city}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Téléphone
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData.phone}</h5>
                      </Col>
                      <Col lg={12}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Description
                        </p>
                        <p className="fs-14 mb-0">{complaintData.description}</p>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Plainte précédente
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData.hasPreviousComplaint}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Fichiers joints
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData.files}</h5>
                      </Col>
                    </Row>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComplaintDetails;
