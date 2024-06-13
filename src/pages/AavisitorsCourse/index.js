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

const MesCours = () => {
  document.title = "Liste des cours"
  const [modules, setModules] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // API
    setModules([
      { id: 1, title: "Module 1", description: "Introduction au module 1", date: "2024-05-28" },
      { id: 2, title: "Module 2", description: "Introduction au module 2", date: "2024-05-29" },
      { id: 3, title: "Module 3", description: "Introduction au module 3", date: "2024-05-30" },
      { id: 4, title: "Module 4", description: "Introduction au module 4", date: "2024-05-31" },
      { id: 5, title: "Module 5", description: "Introduction au module 5", date: "2024-06-01" },
      { id: 6, title: "Module 6", description: "Introduction au module 6", date: "2024-06-02" },
    ]);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredModules = modules.filter((module) =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.date.includes(searchTerm)
  );

  const paginatedModules = filteredModules.slice(
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
                </div>
              </CardHeader>
              <Card className = "mt-4">
                <CardBody>
                  <Table className="table-centered table-nowrap mb-0 " style={{ fontSize: '16px' }}>
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
                      {paginatedModules.map((module, index) => (
                        <tr key={index}>
                          <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                          <td>{module.title}</td>
                          <td>{module.description.split(" ").slice(0, 3).join(" ")}...</td>
                          <td>{module.date}</td>
                          <td>
                            <Link to={`/module/${module.id}`} className="text-info">
                              <i className="las la-eye" style={{ color: 'grey' }} />
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
                    {Array.from({ length: Math.ceil(filteredModules.length / itemsPerPage) }, (_, i) => (
                      <PaginationItem active={i + 1 === currentPage} key={i}>
                        <PaginationLink onClick={() => handlePageChange(i + 1)} href="#">
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem disabled={currentPage >= filteredModules.length / itemsPerPage}>
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

export default MesCours;
