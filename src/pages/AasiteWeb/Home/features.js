// import React from 'react';
// import { Container, Row, Col, Button } from 'reactstrap';
// import ModuleCard from './ModuleCard';

// import module1Img from '../../../assets/images/profile-bg.jpg';
// import module2Img from '../../../assets/images/profile-bg.jpg';
// import module3Img from '../../../assets/images/profile-bg.jpg';

// const courses = [
//     {
//         title: 'Module 1: Le citoyen dans la cité',
//         points: [
//             'Définir la notion de « citoyen béninois »',
//             'Enumérer les droits et devoirs du citoyen béninois',
//             'Enumérer les fondements symboliques de la citoyenneté béninoise'
//         ],
//         image: module1Img
//     },
//     {
//         title: 'Module 2: La démocratie au Bénin',
//         points: [
//             'Expliquer le système politique béninois',
//             'Décrire les institutions de la République',
//             'Analyser les enjeux démocratiques'
//         ],
//         image: module2Img
//     },
//     {
//         title: 'Module 3: La participation citoyenne',
//         points: [
//             'Identifier les moyens de participation citoyenne',
//             'Expliquer l’importance de l’engagement civique',
//             'Promouvoir les actions citoyennes'
//         ],
//         image: null
//     },
   
// ];

// const CoursesSection = () => {
//     return (
//         <Container className="my-5">
//             <Row className="justify-content-center mb-4">
//                 <Col md={10} className="text-center">
//                     <h2 className="fw-bold">COURS D'EDUCATION CITOYENNE</h2>
//                     <p className="lead">
//                         Une série de cours en ligne interactive pour apprendre et évaluer vos connaissances à propos de la citoyenneté.
//                     </p>
//                 </Col>
//             </Row>
//             <Row>
//                 {courses.map((course, index) => (
//                     <ModuleCard key={index} title={course.title} points={course.points} image={course.image} />
//                 ))}
//             </Row>
//             <Row className="justify-content-center mt-4">
//                 <Col md={4} className="text-center">
//                     <Button color="primary" className="btn-blue-night btn-lg rounded-pill">
//                         Tous les cours &gt;
//                     </Button>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default CoursesSection;


// CoursesSection.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import ModuleCard from './ModuleCard';
import defaultImage from '../../../assets/images/404-error.png';

import module1Img from '../../../assets/images/profile-bg.jpg';
import module2Img from '../../../assets/images/profile-bg.jpg';
// import module3Img from '../../../assets/images/profile-bg.jpg';

const initialCourses = [
    {
        title: '(Module 1) Le citoyen dans la cité',
        points: [
            'Définir la notion de « citoyen béninois »',
            'Enumérer les droits et devoirs du citoyen béninois',
            'Enumérer les fondements symboliques de la citoyenneté béninoise'
        ],
        image: module1Img,
        price: '29 £'
    },
    {
        title: '(Module 2) La démocratie au Bénin',
        points: [
            'Expliquer le système politique béninois',
            'Décrire les institutions de la République',
            'Analyser les enjeux démocratiques'
        ],
        image: module2Img,
        price: '35 £'
    },
    {
        title: '(Module 3) La participation citoyenne',
        points: [
            'Identifier les moyens de participation citoyenne',
            'Expliquer l’importance de l’engagement civique',
            'Promouvoir les actions citoyennes'
        ],
        image: null,
        price: '25 £'
    },
    {
        title: '(Module 4) Sans image',
        points: [
            'Ceci est un module sans image spécifique',
            'Utilise l\'image par défaut',
        ],
        image: null,
        price: '19 £'
    }
];

const CoursesSection = () => {
    const [courses, setCourses] = useState(initialCourses);
    const [modal, setModal] = useState(false);
    const [form, setForm] = useState({ title: '', points: '', image: '', price: '' });
    const [errors, setErrors] = useState({});

    const toggle = () => setModal(!modal);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const validateForm = () => {
        const { title, points, price } = form;
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!points) newErrors.points = 'Points are required';
        if (!price) newErrors.price = 'Price is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            setCourses([
                ...courses,
                {
                    ...form,
                    points: form.points.split(',').map(point => point.trim()),
                    image: form.image || defaultImage
                }
            ]);
            setForm({ title: '', points: '', image: '', price: '' });
            toggle();
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-between mb-4">
                <Col md={10} className="text-center">
                    <h2 className="fw-bold">COURS D'EDUCATION CITOYENNE</h2>
                    <p className="lead">
                        Une série de cours en ligne interactive pour apprendre et évaluer vos connaissances à propos de la citoyenneté.
                    </p>
                </Col>
                <Col md={2} className="text-right">
                    <Button color="primary" className="btn-blue-night" onClick={toggle}>Ajouter un module</Button>
                </Col>
            </Row>
            <Row>
                {courses.map((course, index) => (
                    <ModuleCard 
                        key={index} 
                        title={course.title} 
                        points={course.points} 
                        image={course.image} 
                        price={course.price} 
                    />
                ))}
            </Row>
            <Row className="justify-content-center mt-4">
                <Col md={4} className="text-center">
                    <Button color="primary" className="btn-blue-night btn-lg rounded-pill">
                        Tous les cours &gt;
                    </Button>
                </Col>
            </Row>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Ajouter un module</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="title">Titre</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                value={form.title}
                                onChange={handleChange}
                                invalid={!!errors.title}
                            />
                            {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="points">Points (séparés par des virgules)</Label>
                            <Input
                                type="textarea"
                                name="points"
                                id="points"
                                value={form.points}
                                onChange={handleChange}
                                invalid={!!errors.points}
                            />
                            {errors.points && <div className="invalid-feedback">{errors.points}</div>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="image">Image URL (optionnel)</Label>
                            <Input
                                type="text"
                                name="image"
                                id="image"
                                value={form.image}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">Tarif</Label>
                            <Input
                                type="text"
                                name="price"
                                id="price"
                                value={form.price}
                                onChange={handleChange}
                                invalid={!!errors.price}
                            />
                            {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                        </FormGroup>
                        <Button color="primary" type="submit" className="btn-blue-night">Enregistrer</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </Container>
    );
};

export default CoursesSection;

