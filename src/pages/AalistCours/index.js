
 // CrmCompanies.js
 import React, { useEffect, useState } from "react";
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
   Input,
 } from "reactstrap";
 
 import AanewActuality from "../AanewActuality"; // Assurez-vous d'importer le composant AanewActuality
 
 const CrmCompanies = () => {
   const [news, setNews] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 5;
 
   useEffect(() => {
     setNews([
         { id: 1, title: "Problème de livraison", description: "Le colis n'est pas arrivé à temps", date: "2024-05-28 12:34" },
         { id: 2, title: "Produit défectueux", description: "Le produit a des défauts visibles", date: "2024-05-28 13:45" },
         { id: 3, title: "Service client", description: "Le service client ne répond pas", date: "2024-05-28 14:56" },
         { id: 4, title: "Remboursement", description: "Je n'ai pas reçu mon remboursement", date: "2024-05-28 15:23" },
         { id: 5, title: "Erreur de facturation", description: "Montant incorrect sur la facture", date: "2024-05-28 16:45" },
         { id: 6, title: "Qualité des produits", description: "Les produits ne sont pas conformes", date: "2024-05-28 17:50" },
     ]);
   }, []);
 
   const handlePageChange = (pageNumber) => {
     setCurrentPage(pageNumber);
   };
 
   const addArticle = (article) => {
     setNews((prevNews) => [...prevNews, article]);
   };
 
   const filteredNews = news.filter((item) =>
     item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.date.includes(searchTerm)
   );
 
   const paginatedNews = filteredNews.slice(
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
                   <Input
                     type="text"
                     placeholder="Rechercher..."
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     className="me-3"
                   />
                   <div className="flex-grow-1 py-4">
                     <Link to="/new-actuality">
                       <Button color="info">
                         <i className="ri-add-fill me-1 align-bottom"></i> Ajouter une actualité
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
                         <th>N°</th>
                         <th>Titre</th>
                         <th>Description</th>
                         <th>Date</th>
                         <th>Actions</th>
                       </tr>
                     </thead>
                     <tbody>
                       {paginatedNews.map((item, index) => (
                         <tr key={index}>
                           <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                           <td>{item.title}</td>
                           <td>{item.description.split(" ").slice(0, 3).join(" ")}...</td>
                           <td>{item.date}</td>
                           <td>
                             <Link to="#" className="text-warning me-2">
                               <i className="las la-edit" style={{ color: 'gray' }} />
                             </Link>
                             <Link to="#" className="text-danger">
                               <i className="las la-trash" style={{ color: 'gray' }} />
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
                     {Array.from({ length: Math.ceil(filteredNews.length / itemsPerPage) }, (_, i) => (
                       <PaginationItem active={i + 1 === currentPage} key={i}>
                         <PaginationLink onClick={() => handlePageChange(i + 1)} href="#">
                           {i + 1}
                         </PaginationLink>
                       </PaginationItem>
                     ))}
                     <PaginationItem disabled={currentPage >= filteredNews.length / itemsPerPage}>
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
 