import React, { useState } from "react";
import { Col, Container, Row, Form, FormGroup, Label, Input, Button } from "reactstrap";

const NewArticle = ( props ) => {
  document.title = "Nouvelle actualité"

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      id: Date.now(), // Utilisation de l'horodatage comme ID unique
      title,
      description,
      date: new Date().toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' }),
    };

    // addArticle(newArticle);

    // Rediriger vers la liste des actualités
    // history.push("/list-actuality");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="text-center mb-5 pt-4">
            <h3 className="mb-3 fw-semibold">Nouvelle actualité</h3>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="title">Titre</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Entrez le titre de l'actualité"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Entrez la description de l'actualité"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="file">Joindre des documents</Label>
              <Input
                type="file"
                name="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </FormGroup>
            <Button type="submit" color="primary">Enregistrer</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewArticle;
