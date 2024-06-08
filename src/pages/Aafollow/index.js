import React, { useState } from "react";
import { Container, Row, Col, Input, Button, Form, FormGroup, Label, Card, CardBody } from "reactstrap";
import ComplaintDetails from "./CompaintDetails";

const ComplaintSearch = () => {
  const [complaintNumber, setComplaintNumber] = useState("");
  const [complaintData, setComplaintData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    // Simuler une requête pour obtenir les détails de la plainte par numéro
    // Remplacez cette logique par une vraie requête API
    const mockData = {
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

    if (complaintNumber === "PL123456") {
      setComplaintData(mockData);
      setError("");
    } else {
      setComplaintData(null);
      setError("Numéro de plainte invalide. Veuillez réessayer.");
    }
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xxl={9}>
            <Card>
              <CardBody>
                <Form onSubmit={handleSearch}>
                  <FormGroup>
                    <Label for="complaintNumber">Entrez votre numéro de plainte</Label>
                    <Input
                      type="text"
                      id="complaintNumber"
                      value={complaintNumber}
                      onChange={(e) => setComplaintNumber(e.target.value)}
                      placeholder="Numéro de plainte"
                      required
                    />
                  </FormGroup>
                  <Button type="submit" color="primary">Rechercher</Button>
                </Form>
                {error && <p className="text-danger mt-3">{error}</p>}
              </CardBody>
            </Card>
            {complaintData && (
              <ComplaintDetails complaintData={complaintData} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComplaintSearch;
