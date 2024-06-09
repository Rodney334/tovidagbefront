// Inscrits.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card, CardHeader, CardBody, Table, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Inscrits = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setUsers([
      { id: 1, name: 'John Doe', city: 'Paris', complaints: 2 },
      { id: 2, name: 'Jane Roe', city: 'Londres', complaints: 1 },
      { id: 3, name: 'Richard Roe', city: 'Berlin', complaints: 4 },
      { id: 4, name: 'Emily Smith', city: 'Madrid', complaints: 3 },
      { id: 5, name: 'Michael Johnson', city: 'Rome', complaints: 5 },
      { id: 6, name: 'Patricia Brown', city: 'Lisbonne', complaints: 1 },
    ]);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const paginatedUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 py-4">
                      <Button color="info">
                        <i className="ri-add-fill me-1 align-bottom"></i> Ajouter un utilisateur
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <Table className="table-centered table-nowrap mb-0" style={{ fontSize: '16px' }}>
                    <thead className="table-light">
                      <tr>
                        <th>Nom & Prénoms</th>
                        <th>Ville</th>
                        <th>Nombre de plaintes</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedUsers.map((user, index) => (
                        <tr key={index}>
                          <td>{user.name}</td>
                          <td>{user.city}</td>
                          <td>{user.complaints}</td>
                          <td>
                            <Button color="danger" onClick={() => handleDeleteUser(user.id)}>
                              <i className="ri-delete-bin-line"></i>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Pagination className="pagination justify-content-end">
                    <PaginationItem disabled={currentPage <= 1}>
                      <PaginationLink onClick={() => handlePageChange(currentPage - 1)} previous href="#" />
                    </PaginationItem>
                    {Array.from({ length: Math.ceil(users.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem active={i + 1 === currentPage} key={i}>
                        <PaginationLink onClick={() => handlePageChange(i + 1)} href="#">
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem disabled={currentPage >= users.length / itemsPerPage}>
                      <PaginationLink onClick={() => handlePageChange(currentPage + 1)} next href="#" />
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

export default Inscrits;
