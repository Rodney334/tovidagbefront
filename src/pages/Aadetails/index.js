// import React from "react";
// import { CardBody, Row, Col, Card, CardHeader, Container } from "reactstrap";
// import { Link } from "react-router-dom";

// const ComplaintDetails = () => {
//   const printComplaint = () => {
//     window.print();
//   };

//   document.title = "Complaint Details";

//   // Données fictives de la plainte
//   const complaintData = {
//     id: "PL123456",
//     date: "28 May, 2024",
//     time: "10:30AM",
//     status: "En cours",
//     lastName: "Doe",
//     firstName: "John",
//     personInvolved: "Jane Smith",
//     concernedOrganization: "XYZ Corporation",
//     city: "Cotonou",
//     phone: "+229 1234 5678",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
//     hasPreviousComplaint: "Non",
//     files: "document.pdf",
//   };

//   return (
//     <div className="page-content">
//       <Container fluid>
//         <Row className="justify-content-center">
//           <Col xxl={9}>
//             <Card id="demo">
//               <Row>
//                 <Col lg={12}>
//                   <CardHeader className="border-bottom-dashed p-4">
//                     <div className="d-flex">
//                       <div className="flex-grow-1">
//                         <div className="mt-sm-5 mt-4">
//                           <h6 className="text-muted text-uppercase fw-semibold">
//                             Détails de la plainte
//                           </h6>
//                         </div>
//                       </div>
//                       <div className="flex-shrink-0 mt-sm-0 mt-3">
//                         <h6>
//                           <span className="text-muted fw-normal">Numéro de plainte:</span> {complaintData.id}
//                         </h6>
//                         <h6>
//                           <span className="text-muted fw-normal">Date:</span> {complaintData.date}
//                         </h6>
//                         <h6>
//                           <span className="text-muted fw-normal">Heure:</span> {complaintData.time}
//                         </h6>
//                         <h6 className="mb-0">
//                           <span className="text-muted fw-normal">Statut:</span> {complaintData.status}
//                         </h6>
//                       </div>
//                     </div>
//                   </CardHeader>
//                 </Col>
//                 <Col lg={12}>
//                   <CardBody className="p-4">
//                     <Row className="g-3">
//                       <Col lg={6}>
//                         <p className="text-muted mb-2 text-uppercase fw-semibold">
//                           Nom
//                         </p>
//                         <h5 className="fs-14 mb-0">{complaintData.lastName}</h5>
//                       </Col>
//                       <Col lg={6}>
//                         <p className="text-muted mb-2 text-uppercase fw-semibold">
//                           Prénom
//                         </p>
//                         <h5 className="fs-14 mb-0">{complaintData.firstName}</h5>
//                       </Col>
//                       <Col lg={6}>
//                         <p className="text-muted mb-2 text-uppercase fw-semibold">
//                           Personne impliquée
//                         </p>
//                         <h5 className="fs-14 mb-0">{complaintData.personInvolved}</h5>
//                       </Col>
//                       <Col lg={6}>
//                         <p className="text-muted mb-2 text-uppercase fw-semibold">
//                           Organisme concerné
//                         </p>
//                         <h5 className="fs-14 mb-0">{complaintData.concernedOrganization}</h5>
//                       </Col>
//                       <Col lg={6}>
//                         <p className="text-muted mb-2 text-uppercase fw-semibold">
//                           Ville
//                         </p>
//                         <h5 className="fs-14 mb-0">{complaintData.city}</h5>
//                       </Col>
//                       <Col lg={6}>
//                         <p className="text-muted mb-2 text-uppercase fw-semibold">
//                           Téléphone
//                         </p>
//                         <h5 className="fs-14 mb-0">{complaintData.phone}</h5>
//                       </Col>
//                       <Col lg={12}>
//                         <p className="text-muted mb-2 text-uppercase fw-semibold">
//                           Description
//                         </p>
//                         <p className="fs-14 mb-0">{complaintData.description}</p>
//                       </Col>
//                       <Col lg={6}>
//                         <p className="text-muted mb-2 text-uppercase fw-semibold">
//                           Plainte précédente
//                         </p>
//                         <h5 className="fs-14 mb-0">{complaintData.hasPreviousComplaint}</h5>
//                       </Col>
//                       <Col lg={6}>
//                         <p className="text-muted mb-2 text-uppercase fw-semibold">
//                           Fichiers joints
//                         </p>
//                         <h5 className="fs-14 mb-0">{complaintData.files}</h5>
//                       </Col>
//                     </Row>
//                     <div className="hstack gap-2 justify-content-end d-print-none mt-4">
//                       <Link to="#" onClick={printComplaint} className="btn btn-success">
//                         <i className="ri-printer-line align-bottom me-1"></i> Imprimer
//                       </Link>
//                       <Link to="#" className="btn btn-primary">
//                         <i className="ri-download-2-line align-bottom me-1"></i> Télécharger
//                       </Link>
//                     </div>
//                   </CardBody>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ComplaintDetails;
import React, { useState } from "react";
import {
  CardBody,
  Row,
  Col,
  Card,
  CardHeader,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Label,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

const ComplaintDetails = () => {
  document.title = "Complaint Details";

  const [modal, setModal] = useState(false);
  const [rejectDescription, setRejectDescription] = useState("");
  const [error, setError] = useState("");

  const toggle = () => setModal(!modal);

  // Données fictives de la plainte
  const complaintData = {
    id: "PL123456",
    date: "28 May, 2024",
    time: "10:30AM",
    status: "En cours",
    lastName: "Doe",
    firstName: "John",
    personInvolved: "Jane Smith",
    concernedOrganization: "XYZ Corporation",
    city: "Cotonou",
    phone: "+229 1234 5678",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    hasPreviousComplaint: "Non",
    files: "document.pdf",
  };

  const handleAccept = () => {
    console.log("Plaintes acceptée:", complaintData.id);
  
  };

  const handleReject = () => {
    if (rejectDescription.trim() === "") {
      setError("La description du rejet est obligatoire.");
      return;
    }
    console.log("Plaintes rejetée:", complaintData.id, "Description:", rejectDescription);
    setModal(false);
    
  };

  const handleDescriptionChange = (e) => {
    setRejectDescription(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
    }
  };

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
                    <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                      <Button color="success" onClick={handleAccept}>
                        Accepté
                      </Button>
                      <Button color="danger" onClick={toggle}>
                        Rejeté
                      </Button>
                    </div>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Raison du rejet</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="rejectDescription">Description du rejet</Label>
            <Input
              type="textarea"
              name="text"
              id="rejectDescription"
              value={rejectDescription}
              onChange={handleDescriptionChange}
              invalid={error !== ""}
            />
            {error && <FormFeedback>{error}</FormFeedback>}
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleReject}>
            Valider le rejet
          </Button>
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ComplaintDetails;
