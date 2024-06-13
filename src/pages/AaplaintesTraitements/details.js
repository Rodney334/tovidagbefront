import React, { useEffect, useState } from "react";
import { CardBody, Row, Col, Card, CardHeader, Container, Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { key } from "../../constantes/key";

const TreatedDetails = (props) => {
  document.title = "Plainte Details";

  const accessToken = JSON.parse(sessionStorage.getItem("authUser")).accessToken

  const params = useParams("id")
  const [complaintData, setComplaintData] = useState()
  const getPlainte = async () => {
    try {
      const response = await axios.get(
        key.apiBaseURL + "/getoneplainte",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          params: {
            id: params.id
          }
        }
      )
      if ( response ) {
        console.log("get one response :: ", response.data)
        setComplaintData({
          id: response.data.id,
          date: response.data.created_at.split("T")[0],
          time: response.data.created_at.split("T")[1].split(".")[0],
          status: response.data.statut,
          lastName: response.data.nom,
          firstName: response.data.nom,
          personInvolved: response.data.impliquer,
          concernedOrganization: response.data.concerner,
          city: response.data.commune,
          phone: response.data.tel,
          description: response.data.description,
          hasPreviousComplaint: response.data.deja,
          files: response.data.document,
        })
      }
    } catch (error) {
      console.log("nouvelle plainte error : ", error)
    }
  }
  useEffect(()=>{
    if ( accessToken ) {
      getPlainte()
    }
  }, [accessToken])

  useEffect(()=>{
    if ( complaintData ) {
      console.log(complaintData)
    }
  }, [complaintData])
  // Données fictives de la plainte
  const complaintData2 = {
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

  const handleAccept = async() => {
    // Logique pour accepter la plainte
    console.log("Plaintes acceptée:", complaintData.id);
    // Mise à jour du statut de la plainte (cette partie peut nécessiter une API call pour mettre à jour sur le serveur)
    try {
      const response = await axios.post(
        key.apiBaseURL + "/changestatus",
        {
          id: complaintData.id,
          status: "EN COURS"
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      if(response){
        alert("SUCCESS")
      }
    } catch (error) {
      alert("Echec")
      console.log("erreur :: ", error.response)
    }
  };

  const handleReject = async() => {
    // Logique pour rejeter la plainte
    console.log("Plaintes rejetée:", complaintData.id);
    // Mise à jour du statut de la plainte (cette partie peut nécessiter une API call pour mettre à jour sur le serveur)
    try {
      const response = await axios.post(
        key.apiBaseURL + "/changestatus",
        {
          id: complaintData.id,
          status: "REJETER"
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      if(response){
        alert("SUCCESS")
      }
    } catch (error) {
      alert("Echec")
      console.log("erreur :: ", error.response)
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
                          <span className="text-muted fw-normal">Numéro de plainte:</span> {complaintData && complaintData.id}
                        </h6>
                        <h6>
                          <span className="text-muted fw-normal">Date:</span> {complaintData && complaintData.date}
                        </h6>
                        <h6>
                          <span className="text-muted fw-normal">Heure:</span> {complaintData && complaintData.time}
                        </h6>
                        <h6 className="mb-0">
                          <span className="text-muted fw-normal">Statut:</span> {complaintData && complaintData.status}
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
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.lastName}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Prénom
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.firstName}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Personne impliquée
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.personInvolved}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Organisme concerné
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.concernedOrganization}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Ville
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.city}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Téléphone
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.phone}</h5>
                      </Col>
                      <Col lg={12}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Description
                        </p>
                        <p className="fs-14 mb-0">{complaintData && complaintData.description}</p>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Plainte précédente
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.hasPreviousComplaint ? "OUI" : "NON"}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Fichiers joints
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.files ? complaintData.files : "Aucun fichier"}</h5>
                      </Col>
                    </Row>
                    {/* <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                      <Button color="success" onClick={() => handleAccept()}>
                        Accepté
                      </Button>
                      <Button color="danger" onClick={() => handleReject()}>
                        Rejeté
                      </Button>
                    </div> */}
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

export default TreatedDetails;
