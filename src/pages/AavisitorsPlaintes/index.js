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

const MesPlaintes = () => {
  document.title = "Liste des plaintes"
  const [complaints, setComplaints] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // API 
    setComplaints([
      { id: 1, name: "John Doe", city: "Paris", person: "John Smith", date: "2024-05-28", status: "En cours" },
      { id: 2, name: "John Doe", city: "Londres", person: "Jane Smith", date: "2024-05-29", status: "Traité" },
      { id: 3, name: "John Doe", city: "Berlin", person: "Richard Smith", date: "2024-05-30", status: "Rejeté" },
      { id: 4, name: "John Doe", city: "Madrid", person: "Emily Johnson", date: "2024-05-31", status: "En cours" },
      { id: 5, name: "John Doe", city: "Rome", person: "Michael Brown", date: "2024-06-01", status: "Traité" },
      { id: 6, name: "John Doe", city: "Lisbonne", person: "Patricia Davis", date: "2024-06-02", status: "Rejeté" },
    ]);
    //
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedComplaints = complaints.slice(
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
                      <Button color="info">
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
                        <th>Nom et Prénom</th>
                        <th>Ville</th>
                        <th>Personne concernée</th>
                        <th>Date</th>
                        <th>Statut</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedComplaints.map((complaint, index) => (
                        <tr key={index}>
                          <td>{complaint.name}</td>
                          <td>{complaint.city}</td>
                          <td>{complaint.person}</td>
                          <td>{complaint.date}</td>
                          <td>
                            <span className={`badge ${
                              complaint.status === "En cours" ? "bg-warning" : 
                              complaint.status === "Traité" ? "bg-success" : 
                              "bg-danger"
                            }`}>
                              {complaint.status}
                            </span>
                          </td>
                          <td>
                            <Link to="#" className="text-info">
                              <i className="las la-eye" style={{ color: 'black' }} />
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
                    {Array.from({ length: Math.ceil(complaints.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem active={i + 1 === currentPage} key={i}>
                        <PaginationLink onClick={() => handlePageChange(i + 1)} href="#">
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem disabled={currentPage >= complaints.length / itemsPerPage}>
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

export default MesPlaintes;
