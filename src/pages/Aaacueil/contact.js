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
import './styles.css';
import axios from 'axios';

const Contact = () => {
    
    const navigate = useNavigate();

    const accessToken = JSON.parse(sessionStorage.getItem("authUser")).accessToken
    console.log("accesstoken : ", accessToken)

    const communes = [
        "Cotonou", "Abomey-Calavi", "Porto-Novo", "Parakou", "Djougou",
        "Bohicon", "Kandi", "Lokossa", "Ouidah", "Abomey",
    ];
    
    const arrondissement = [
        "Cotonou", "Abomey-Calavi", "Porto-Novo", "Parakou", "Djougou",
        "Bohicon", "Kandi", "Lokossa", "Ouidah", "Abomey",
        
    ];

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
            lastName: Yup.string().required('Nom est requis'),
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
            // dispatch(addComplaint(values));
            // alert('Complaint Submitted Successfully');
            // navigate('/nouvelle-plaintes'); // Redirige vers la page des nouvelles plaintes
            const data = {
                nom: values.lastName,
                age: values.age,
                impliquer: values.personInvolved,
                concerner: values.concernedOrganization,
                fonction: values.position,
                sexe: values.gender,
                commune: values.city,
                arrondissement: values.borough,
                tel: values.phone,
                description: values.description,
                handicap: values.isDisabled,
                deja: values.hasPreviousComplaint,
                documents: null,
                plaignant_id: null,
                moderateur_id: null
            }
            axios.post(
                "http://api.tovidagbe.org/createplainte",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            ).then(data => {
                console.log("data : ", data)
            }).catch(error => {
                console.log("error : ", error)
            })
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
                                            <Label for="lastName" className="form-label">Nom *</Label>
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

    // return (
    //     <React.Fragment>
    //         <section className="section" id="contact">
    //             <Container>
    //                 <Row className="justify-content-center">
    //                     <Col lg={8}>
    //                         <div className="text-center mb-5 pt-4">
    //                             <h3 className="mb-3 fw-semibold">Formulaire de plainte.</h3>
    //                             <p className="text-muted mb-4 ff-secondary"> Portez vos plaintes en toute quiètude, chez Tovigagbé, votre satisfaction, notre soulagement. Remplissez le formulaire ci-dessous, et votre plainte, sera traitée dans les plus bref délais.  </p>
    //                         </div>
    //                     </Col>
    //                 </Row>

    //                 <Row>
    //                     <Col lg={12}>
    //                         <div>
    //                             <Form>
    //                                 <Row>
    //                                     <Col lg={6}>
    //                                         <div className="mb-4">
    //                                             <label htmlFor="lastName" className="form-label fs-13">Nom *</label>
    //                                             <input name="lastName" id="lastName" type="text"
    //                                                 className="form-control bg-light border-light" placeholder="Votre nom*" />
    //                                         </div>
    //                                     </Col>
    //                                     <Col lg={6}>
    //                                         <div className="mb-4">
    //                                             <label htmlFor="firstName" className="form-label fs-13">Prénom *</label>
    //                                             <input name="firstName" id="firstName" type="text"
    //                                                 className="form-control bg-light border-light" placeholder="Votre prénom*" />
    //                                         </div>
    //                                     </Col>
    //                                     <Col lg={6}>
    //                                         <div className="mb-4">
    //                                             <label htmlFor="personInvolved" className="form-label fs-13">Personne impliquée *</label>
    //                                             <input name="personInvolved" id="personInvolved" type="text"
    //                                                 className="form-control bg-light border-light" placeholder="Nom de la personne impliquée*" />
    //                                         </div>
    //                                     </Col>
    //                                     <Col lg={6}>
    //                                         <div className="mb-4">
    //                                             <label htmlFor="concernedOrganization" className="form-label fs-13">Organisme concerné *</label>
    //                                             <input name="concernedOrganization" id="concernedOrganization" type="text"
    //                                                 className="form-control bg-light border-light" placeholder="Nom de l'organisme concerné*" />
    //                                         </div>
    //                                     </Col>
    //                                     <Col lg={6}>
    //                                         <div className="mb-4">
    //                                             <label htmlFor="city" className="form-label fs-13">Ville *</label>
    //                                             <select name="city" id="city" className="form-control bg-light border-light">
    //                                                 <option value="">Choisir une ville</option>
    //                                                 {communes.map((commune, index) => (
    //                                                     <option key={index} value={commune}>{commune}</option>
    //                                                 ))}
    //                                             </select>
    //                                         </div>
    //                                     </Col>
    //                                     <Col lg={6}>
    //                                         <div className="mb-4">
    //                                             <label htmlFor="phone" className="form-label fs-13">Téléphone *</label>
    //                                             <input name="phone" id="phone" type="text"
    //                                                 className="form-control bg-light border-light" placeholder="Votre téléphone*" />
    //                                         </div>
    //                                     </Col>
    //                                 </Row>
    //                                 <Row>
    //                                     <Col lg={12}>
    //                                         <div className="mb-4">
    //                                             <label htmlFor="description" className="form-label fs-13">Description de la plainte *</label>
    //                                             <textarea name="description" id="description" rows="3"
    //                                                 className="form-control bg-light border-light" placeholder="Décrivez votre plainte..."></textarea>
    //                                         </div>
    //                                     </Col>
    //                                 </Row>
    //                                 <Row>
    //                                     <Col lg={12}>
    //                                         <div className="mb-4">
    //                                             <label className="form-label fs-13">Avez-vous déjà porté plainte sur ce cas? *</label>
    //                                             <div>
    //                                                 <div className="form-check form-check-inline">
    //                                                     <input className="form-check-input" type="radio" name="hasPreviousComplaint" id="hasPreviousComplaintYes" value="oui" />
    //                                                     <label className="form-check-label" htmlFor="hasPreviousComplaintYes">Oui</label>
    //                                                 </div>
    //                                                 <div className="form-check form-check-inline">
    //                                                     <input className="form-check-input" type="radio" name="hasPreviousComplaint" id="hasPreviousComplaintNo" value="non" />
    //                                                     <label className="form-check-label" htmlFor="hasPreviousComplaintNo">Non</label>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </Col>
    //                                 </Row>
    //                                 <Row>
    //                                     <Col lg={12}>
    //                                         <div className="mb-4">
    //                                             <label htmlFor="files" className="form-label fs-13">Joindre des documents à votre plainte *</label>
    //                                             <input type="file" name="files" id="files"
    //                                                 className="form-control bg-light border-light" />
    //                                             <div className="form-text">Formats acceptés : pdf, image, audio, vidéo</div>
    //                                         </div>
    //                                     </Col>
    //                                 </Row>
    //                                 <Row>
    //                                     <Col lg={12} className="text-end">
    //                                         <Button type="submit" id="submit" name="send" className="submitBnt btn btn-primary">Envoyer votre dénonciation</Button>
    //                                     </Col>
    //                                 </Row>
    //                             </Form>
    //                         </div>
    //                     </Col>
    //                 </Row>
    //             </Container>
    //         </section>
    //     </React.Fragment>
    // );
};

export default Contact;
