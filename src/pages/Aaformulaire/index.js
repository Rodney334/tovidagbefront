// NewComplaint.js

import React from 'react';
import { useDispatch } from 'react-redux';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
} from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addComplaint } from '../../store/complaints/actions';
import { useNavigate } from 'react-router-dom';
import './style.css';

const communes = [
    "Cotonou", "Abomey-Calavi", "Porto-Novo", "Parakou", "Djougou",
    "Bohicon", "Kandi", "Lokossa", "Ouidah", "Abomey",
    
];

const arrondissement = [
    "Cotonou", "Abomey-Calavi", "Porto-Novo", "Parakou", "Djougou",
    "Bohicon", "Kandi", "Lokossa", "Ouidah", "Abomey",
    
];

const NewComplaint = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            lastName: '',
            age: '',
            personInvolved: '',
            concernedOrganization: '',
            position: '',
            gender: '',
            city: '',
            borough: '',
            phone: '',
            description: '',
            isDisabled: '',
            hasPreviousComplaint: '',
            files: null,
        },
        validationSchema: Yup.object({
            // lastName: Yup.string().required('Nom est requis'),
            age: Yup.string().required('Âge est requis'),
            personInvolved: Yup.string().required('Personne impliquée est requise'),
            concernedOrganization: Yup.string().required('Organisme concerné est requis'),
            position: Yup.string().required('Fonction est requise'),
            gender: Yup.string().required('Sexe est requis'),
            city: Yup.string().required('Ville est requise'),
            borough: Yup.string().required('Arrondissement est requis'),
            phone: Yup.string().required('Téléphone est requis'),
            description: Yup.string().required('Description est requise'),
            isDisabled: Yup.string().required('Veuillez sélectionner si vous êtes une personne handicapée'),
            hasPreviousComplaint: Yup.string().required('Veuillez sélectionner si vous avez déjà porté plainte'),
            files: Yup.mixed().required('Veuillez joindre des fichiers'),
        }),
        onSubmit: (values) => {
            dispatch(addComplaint(values));
            alert('Complaint Submitted Successfully');
            navigate('/nouvelle-plaintes'); // Redirige vers la page des nouvelles plaintes
        },
    });

    return (
        <Container fluid className="d-flex justify-content-center align-items-center new-complaint-container">
            <Row className="w-100">
                <Col xxl={6} lg="8" md="10" className="mx-auto">
                    <Card className="new-complaint-card">
                        <CardBody>
                            <CardTitle className="h2 text-center mb-4">Formulaire de plaintes</CardTitle>
                            <Form onSubmit={formik.handleSubmit}>
                                <Row>
                                    {/* ... tous vos champs de formulaire ici ... */}

                                    <Col md={6}>
                                        <FormGroup className="mb-3">
                                            <Label for="lastName" className="form-label">Nom & Prénoms</Label>
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                className="form-control rounded-pill"
                                                placeholder="Enter your last name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.lastName}
                                                invalid={formik.touched.lastName && formik.errors.lastName ? true : false}
                                            />
                                            <FormFeedback>{formik.errors.lastName}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="mb-3">
                                            <Label for="age" className="form-label">Âge *</Label>
                                            <Input
                                                id="age"
                                                name="age"
                                                type="select"
                                                className="form-control rounded-pill"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.age}
                                                invalid={formik.touched.age && formik.errors.age ? true : false}
                                            >
                                                <option value="">Sélectionnez une option</option>
                                                <option value="supérieur à 35 ans">Supérieur à 35 ans</option>
                                                <option value="inférieur à 35 ans">Inférieur à 35 ans</option>
                                            </Input>
                                            <FormFeedback>{formik.errors.age}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="mb-3">
                                            <Label for="personInvolved" className="form-label">Personne concernée *</Label>
                                            <Input
                                                id="personInvolved"
                                                name="personInvolved"
                                                type="text"
                                                className="form-control rounded-pill"
                                                placeholder="Enter the person's name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.personInvolved}
                                                invalid={formik.touched.personInvolved && formik.errors.personInvolved ? true : false}
                                            />
                                            <FormFeedback>{formik.errors.personInvolved}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="mb-3">
                                            <Label for="concernedOrganization" className="form-label">Structure concerné *</Label>
                                            <Input
                                                id="concernedOrganization"
                                                name="concernedOrganization"
                                                type="text"
                                                className="form-control rounded-pill"
                                                placeholder="Enter the organization name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.concernedOrganization}
                                                invalid={formik.touched.concernedOrganization && formik.errors.concernedOrganization ? true : false}
                                            />
                                            <FormFeedback>{formik.errors.concernedOrganization}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="mb-3">
                                            <Label for="position" className="form-label">Fonction *</Label>
                                            <Input
                                                id="position"
                                                name="position"
                                                type="text"
                                                className="form-control rounded-pill"
                                                placeholder="Enter the person's position"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.position}
                                                invalid={formik.touched.position && formik.errors.position ? true : false}
                                            />
                                            <FormFeedback>{formik.errors.position}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="mb-3">
                                            <Label for="gender" className="form-label">Sexe *</Label>
                                            <Input
                                                id="gender"
                                                name="gender"
                                                type="select"
                                                className="form-control rounded-pill"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.gender}
                                                invalid={formik.touched.gender && formik.errors.gender ? true : false}
                                            >
                                                <option value="">Sélectionnez le sexe</option>
                                                <option value="Masculin">Masculin</option>
                                                <option value="Féminin">Féminin</option>
                                            </Input>
                                            <FormFeedback>{formik.errors.gender}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="mb-3">
                                            <Label for="city" className="form-label">Commune *</Label>
                                            <Input
                                                id="city"
                                                name="city"
                                                type="select"
                                                className="form-control rounded-pill"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.city}
                                                invalid={formik.touched.city && formik.errors.city ? true : false}
                                            >
                                                <option value="">Choisir une ville</option>
                                                {communes.map((commune, index) => (
                                                    <option key={index} value={commune}>{commune}</option>
                                                ))}
                                            </Input>
                                            <FormFeedback>{formik.errors.city}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="mb-3">
                                            <Label for="borough" className="form-label">Arrondissement *</Label>
                                            <Input
                                                id="borough"
                                                name="borough"
                                                type="select"
                                                className="form-control rounded-pill"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.borough}
                                                invalid={formik.touched.borough && formik.errors.borough ? true : false}
                                            >
                                                <option value="">Choisir un arrondissement</option>
                                                {arrondissement.map((arrondissement, index) => (
                                                    <option key={index} value={arrondissement}>{arrondissement}</option>
                                                ))}
                                            </Input>
                                            <FormFeedback>{formik.errors.borough}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup className="mb-3">
                                            <Label for="phone" className="form-label">Téléphone *</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="text"
                                                className="form-control rounded-pill"
                                                placeholder="Enter your phone number"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.phone}
                                                invalid={formik.touched.phone && formik.errors.phone ? true : false}
                                            />
                                            <FormFeedback>{formik.errors.phone}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup className="mb-3">
                                            <Label for="description" className="form-label">Description de la plainte *</Label>
                                            <Input
                                                id="description"
                                                name="description"
                                                type="textarea"
                                                className="form-control"
                                                rows="6"
                                                placeholder="Enter the complaint description"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.description}
                                                invalid={formik.touched.description && formik.errors.description ? true : false}
                                            />
                                            <FormFeedback>{formik.errors.description}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup tag="fieldset" className="mb-3">
                                            <legend className="form-label">Êtes-vous une personne handicapée? *</legend>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input
                                                        type="radio"
                                                        name="isDisabled"
                                                        value="oui"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        invalid={formik.touched.isDisabled && formik.errors.isDisabled ? true : false}
                                                    />{' '}
                                                    Oui
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input
                                                        type="radio"
                                                        name="isDisabled"
                                                        value="non"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        invalid={formik.touched.isDisabled && formik.errors.isDisabled ? true : false}
                                                    />{' '}
                                                    Non
                                                </Label>
                                                <FormFeedback>{formik.errors.isDisabled}</FormFeedback>
                                            </FormGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup tag="fieldset" className="mb-3">
                                            <legend className="form-label">Avez-vous déjà porté plainte sur ce cas? *</legend>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input
                                                        type="radio"
                                                        name="hasPreviousComplaint"
                                                        value="oui"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        invalid={formik.touched.hasPreviousComplaint && formik.errors.hasPreviousComplaint ? true : false}
                                                    />{' '}
                                                    Oui
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input
                                                        type="radio"
                                                        name="hasPreviousComplaint"
                                                        value="non"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        invalid={formik.touched.hasPreviousComplaint && formik.errors.hasPreviousComplaint ? true : false}
                                                    />{' '}
                                                    Non
                                                </Label>
                                                <FormFeedback>{formik.errors.hasPreviousComplaint}</FormFeedback>
                                            </FormGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup className="mb-3">
                                            <Label className="form-label">Joindre des documents à votre plainte *</Label>
                                            <Input
                                                type="file"
                                                name="files"
                                                id="files"
                                                className="form-control rounded-pill"
                                                onChange={(event) => {
                                                    formik.setFieldValue("files", event.currentTarget.files);
                                                }}
                                                invalid={formik.touched.files && formik.errors.files ? true : false}
                                            />
                                            <FormFeedback>{formik.errors.files}</FormFeedback>
                                            <div className="form-text">Formats acceptés : pdf, image, audio, vidéo</div>
                                        </FormGroup>
                                    </Col>
                                    <Col md={12} className="text-end">
                                        <Button type="submit" color="primary" className="rounded-pill">Envoyer votre dénonciation</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default NewComplaint;
