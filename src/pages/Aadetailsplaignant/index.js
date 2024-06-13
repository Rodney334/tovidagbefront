import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CardBody,
  Row,
  Col,
  Card,
  CardHeader,
  Container,
} from "reactstrap";
import withRouter from "../../Components/Common/withRouter";
import axios from "axios";
import { key } from "../../constantes/key";

const ComplaintDetails = (props) => {
  document.title = "Plaignant détail";
  
  const { id } = useParams();
  const [complaintData, setComplaintData] = useState(null);

  const accessToken = JSON.parse(sessionStorage.getItem("authUser")).accessToken
  const params = useParams("id")

  const [plaignant, setPlaignant] = useState()
  const getOnePlaignant = async () => {
    try {
      const response = await axios.get(
        key.apiBaseURL + "/getoneplaignant",
        {
          headers: {
            Authorization : `Bearer ${accessToken}`
          },
          params: {
            id: params.id
          }
        }
      )
      if ( response ) {
        console.log("get one plaignant response :: ", response)
        setComplaintData(response)
      }
    } catch (error) {
      console.log("get one plaignant error :: ", error.response)
    }
  }

  useEffect(()=>{
    if( accessToken ) {
      getOnePlaignant()
    }
  }, [accessToken])

  // useEffect(() => {
  //   // Charger les données fictives pour le plaignant
  //   const data = [
  //     { id: 1, name: "John Doe", age: 30, fonction: "Ingénieur", sexe: "Masculin", commune: "Paris", arrondissement: "1er", phone: "+33 1 23 45 67 89", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", handicap: "Aucun" },
  //     { id: 2, name: "Jane Roe", age: 25, fonction: "Docteur", sexe: "Féminin", commune: "Londres", arrondissement: "2ème", phone: "+44 20 7946 0958", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", handicap: "Visuel" },
  //     { id: 3, name: "Richard Roe", age: 40, fonction: "Avocat", sexe: "Masculin", commune: "Berlin", arrondissement: "3ème", phone: "+49 30 123456", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", handicap: "Auditif" },
  //     { id: 4, name: "Emily Smith", age: 35, fonction: "Professeur", sexe: "Féminin", commune: "Madrid", arrondissement: "4ème", phone: "+34 91 123 45 67", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.", handicap: "Moteur" },
  //     { id: 5, name: "Michael Johnson", age: 28, fonction: "Architecte", sexe: "Masculin", commune: "Rome", arrondissement: "5ème", phone: "+39 06 123 45 67", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.", handicap: "Aucun" },
  //     { id: 6, name: "Patricia Brown", age: 45, fonction: "Artiste", sexe: "Féminin", commune: "Lisbonne", arrondissement: "6ème", phone: "+351 21 123 45 67", description: "Mollit anim id est laborum.", handicap: "Moteur" },
  //   ];
  //   const complaint = data.find(item => item.id.toString() === id);
  //   setComplaintData(complaint);
  // }, [id]);

  // if (!complaintData) {
  //   return <div>Loading...</div>;
  // }

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
                          <span className="text-muted fw-normal">Nom:</span> {complaintData && complaintData.nom}
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
                          Nom & Prénom
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.nom}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Age
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && (complaintData.age || "Aucune donnée") }</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Fonction
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && (complaintData.fonction || "Aucune donnée")}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Sexe
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && (complaintData.sexe || "Aucune donnée")}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Commune
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.commune}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Arrondissement
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.arrondissement}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Téléphone
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.tel}</h5>
                      </Col>
                      <Col lg={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Handicap
                        </p>
                        <h5 className="fs-14 mb-0">{complaintData && complaintData.handicap ? complaintData.handicap == true ? "Handicapé" : complaintData.handicap == false ? "Non handicapé" : "Aucune donnée" : "Aucune donnée" }</h5>
                      </Col>
                      {/* <Col lg={12}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Description
                        </p>
                        <p className="fs-14 mb-0">{complaintData.description}</p>
                      </Col> */}
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

export default withRouter(ComplaintDetails);
