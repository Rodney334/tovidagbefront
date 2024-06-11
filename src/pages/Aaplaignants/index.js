// import React, { useEffect, useState, useCallback } from "react";
// import { Link } from "react-router-dom";
// import {
//   Col,
//   Container,
//   Row,
//   Card,
//   CardHeader,
//   CardBody,
//   Table,
//   Button,
//   Pagination,
//   PaginationItem,
//   PaginationLink,
// } from "reactstrap";

// const CrmCompanies = () => {
//   const [companies, setCompanies] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [modal, setModal] = useState(false);
//   const [deleteModal, setDeleteModal] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     // Définir les données fictives initiales
//     setCompanies([
//       { id: 1, name: "John Doe", commune: "Paris", phone: "+33 1 23 45 67 89", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//       { id: 2, name: "Jane Roe", commune: "Londres", phone: "+44 20 7946 0958", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
//       { id: 3, name: "Richard Roe", commune: "Berlin", phone: "+49 30 123456", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
//       { id: 4, name: "Emily Smith", commune: "Madrid", phone: "+34 91 123 45 67", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
//       { id: 5, name: "Michael Johnson", commune: "Rome", phone: "+39 06 123 45 67", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." },
//       { id: 6, name: "Patricia Brown", commune: "Lisbonne", phone: "+351 21 123 45 67", description: "Mollit anim id est laborum." },
//     ]);
//   }, []);

//   const toggle = useCallback(() => {
//     setModal(!modal);
//   }, [modal]);

//   const handleViewStore = (index) => {
//     // Logique de visualisation (à implémenter)
//     console.log("View store index:", index);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const paginatedCompanies = companies.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid>
//           <Row>
//             <Col lg={12}>
//               <CardHeader>
//                 <div className="d-flex align-items-center">
//                   <div className="flex-grow-1 py-4">
//                     <Link to="/formulaire"> 
//                       <Button color="info" onClick={() => { setIsEdit(false); toggle(); }}>
//                         <i className="ri-add-fill me-1 align-bottom"></i> Ajouter une plainte
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               </CardHeader>
//               <Card>
//                 <CardBody>
//                   <Table className="table-centered table-nowrap mb-0" style={{ fontSize: '16px' }}>
//                     <thead className="table-light">
//                       <tr>
//                         <th>Nom & Prénoms</th>
//                         <th>Commune</th>
//                         <th>Téléphone</th>
//                         <th>Description</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {paginatedCompanies.map((company, index) => (
//                         <tr key={index}>
//                           <td>{company.name}</td>
//                           <td>{company.commune}</td>
//                           <td>{company.phone}</td>
//                           <td>{company.description.split(' ').slice(0, 3).join(' ') + '...'}</td>
//                           <td>
//                             <Link to="/details-plaignant" className="text-info" onClick={() => handleViewStore(index)}>
//                               <i className="las la-eye" style={{ color: '#39FF14' }} id={`viewtooltip-${index}`} />
//                             </Link>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </Table>
//                   <Pagination className="pagination justify-content-end">
//                     <PaginationItem disabled={currentPage <= 1}>
//                       <PaginationLink
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         previous
//                         href="#"
//                       />
//                     </PaginationItem>
//                     {Array.from({ length: Math.ceil(companies.length / itemsPerPage) }, (_, i) => (
//                       <PaginationItem active={i + 1 === currentPage} key={i}>
//                         <PaginationLink onClick={() => handlePageChange(i + 1)} href="#">
//                           {i + 1}
//                         </PaginationLink>
//                       </PaginationItem>
//                     ))}
//                     <PaginationItem disabled={currentPage >= companies.length / itemsPerPage}>
//                       <PaginationLink
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         next
//                         href="#"
//                       />
//                     </PaginationItem>
//                   </Pagination>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </React.Fragment>
//   );
// };

// export default CrmCompanies;


import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

const CrmCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setCompanies([
      { id: 1, name: "John Doe", commune: "Paris", phone: "+33 1 23 45 67 89", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", age: 30, fonction: "Ingénieur", sexe: "Masculin", arrondissement: "1er", handicap: "Aucun" },
      { id: 2, name: "Jane Roe", commune: "Londres", phone: "+44 20 7946 0958", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", age: 25, fonction: "Docteur", sexe: "Féminin", arrondissement: "2ème", handicap: "Visuel" },
      { id: 3, name: "Richard Roe", commune: "Berlin", phone: "+49 30 123456", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", age: 40, fonction: "Avocat", sexe: "Masculin", arrondissement: "3ème", handicap: "Auditif" },
      { id: 4, name: "Emily Smith", commune: "Madrid", phone: "+34 91 123 45 67", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.", age: 35, fonction: "Professeur", sexe: "Féminin", arrondissement: "4ème", handicap: "Moteur" },
      { id: 5, name: "Michael Johnson", commune: "Rome", phone: "+39 06 123 45 67", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.", age: 28, fonction: "Architecte", sexe: "Masculin", arrondissement: "5ème", handicap: "Aucun" },
      { id: 6, name: "Patricia Brown", commune: "Lisbonne", phone: "+351 21 123 45 67", description: "Mollit anim id est laborum.", age: 45, fonction: "Artiste", sexe: "Féminin", arrondissement: "6ème", handicap: "Moteur" },
    ]);
  }, []);

  const toggle = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  const handleViewStore = (id) => {
    // Redirige vers la page de détails du plaignant
    window.location.href = `/complaint/${id}`;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedCompanies = companies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <CardHeader>
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1 py-4">
                    <Link to="/formulaire"> 
                      <Button color="info" onClick={() => { setIsEdit(false); toggle(); }}>
                        <i className="ri-add-fill me-1 align-bottom"></i> Ajouter une plainte
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <Card>
                <CardBody>
                  <Table className="table-centered table-nowrap mb-0" style={{ fontSize: '16px' }}>
                    <thead className="table-light">
                      <tr>
                        <th>Nom & Prénoms</th>
                        <th>Commune</th>
                        <th>Téléphone</th>
                        <th>Description</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedCompanies.map((company) => (
                        <tr key={company.id}>
                          <td>{company.name}</td>
                          <td>{company.commune}</td>
                          <td>{company.phone}</td>
                          <td>{company.description.split(' ').slice(0, 3).join(' ') + '...'}</td>
                          <td>
                            <Link to="#" className="text-info" onClick={() => handleViewStore(company.id)}>
                              <i className="las la-eye" style={{ color: '#39FF14' }} id={`viewtooltip-${company.id}`} />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Pagination className="pagination justify-content-end">
                    <PaginationItem disabled={currentPage <= 1}>
                      <PaginationLink
                        onClick={() => handlePageChange(currentPage - 1)}
                        previous
                        href="#"
                      />
                    </PaginationItem>
                    {Array.from({ length: Math.ceil(companies.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem active={i + 1 === currentPage} key={i}>
                        <PaginationLink onClick={() => handlePageChange(i + 1)} href="#">
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem disabled={currentPage >= companies.length / itemsPerPage}>
                      <PaginationLink
                        onClick={() => handlePageChange(currentPage + 1)}
                        next
                        href="#"
                      />
                    </PaginationItem>
                  </Pagination>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CrmCompanies;

