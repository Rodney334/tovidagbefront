// // ModuleCard.js
// import React from 'react';
// import { Card, CardBody, CardText, CardTitle, Button, Col } from 'reactstrap';
// import defaultImage from '../../../assets/images/404-error.png';

// const ModuleCard = ({ title, points, image }) => {
//     return (
//         <Col md={4} className="mb-2">
//             <Card className="h-100 shadow">
//                 <img src={image || defaultImage} className="card-img-top" alt={title} style={{ height: '140px', objectFit: 'cover' }} />
//                 <CardBody>
//                     <CardTitle tag="h5" className="fw-bold">{title}</CardTitle>
//                     <CardText>
//                         <ul>
//                             {points.map((point, index) => (
//                                 <li key={index}>{point}</li>
//                             ))}
//                         </ul>
//                     </CardText>
//                     <Button color="primary" className="btn-blue-night">Consulter</Button>
//                 </CardBody>
//             </Card>
//         </Col>
//     );
// };

// export default ModuleCard;


// ModuleCard.js
import React from 'react';
import { Card, CardBody, CardText, CardTitle, Button, Col } from 'reactstrap';
import defaultImage from '../../../assets/images/404-error.png';

const ModuleCard = ({ title, points, image, price }) => {
    return (
        <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
                <img src={image || defaultImage} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
                <CardBody>
                    <CardTitle tag="h5" className="fw-bold">{title}</CardTitle>
                    <CardText>
                        <ul>
                            {points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </CardText>
                    <Button color="primary" className="btn-blue-night">Consulter</Button>
                    <CardText className="mt-2 fw-bold" style={{ color: '#FF7500' }}>
                        Tarif : {price}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ModuleCard;
