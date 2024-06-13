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
import withRouter from "../../Components/Common/withRouter";
import axios from "axios";
import { key } from "../../constantes/key";

// import { Link } from "react-router-dom";

const CrmCompanies = () => {
  document.title = "Liste des plaignants"

  const [companies, setCompanies] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const accessToken = JSON.parse(sessionStorage.getItem("authUser")).accessToken

  const [plaignant, setPlaignant] = useState()
  const getAllPlaignant = async () => {
    try {
      const response = await axios.get(
        key.apiBaseURL + "/getallplaignant",
        {
          headers: {
            Authorization : `Bearer ${accessToken}`
          }
        }
      )
      if ( response ) {
        console.log("get all plaignant response :: ", response.data)
        setCompanies(response.data)
      }
    } catch (error) {
      console.log("get all plaignant error :: ", error.response)
    }
  }
  useEffect(()=>{
    if ( accessToken ) {
      getAllPlaignant()
    }
  }, [accessToken])

  // useEffect(() => {
  //   setCompanies([
  //     { id: 1, name: "John Doe", city: "Paris", person: "John Smith", date: "2024-05-28", status: "En cours" },
  //     { id: 2, name: "Jane Roe", city: "Londres", person: "Jane Smith", date: "2024-05-28", status: "En cours" },
  //     { id: 3, name: "Richard Roe", city: "Berlin", person: "Richard Smith", date: "2024-05-28", status: "En cours" },
  //     { id: 4, name: "Emily Smith", city: "Madrid", person: "Emily Johnson", date: "2024-05-28", status: "En cours" },
  //     { id: 5, name: "Michael Johnson", city: "Rome", person: "Michael Brown", date: "2024-05-28", status: "En cours" },
  //     { id: 6, name: "Patricia Brown", city: "Lisbonne", person: "Patricia Davis", date: "2024-05-28", status: "En cours" },
  //   ]);
  // }, []);

  const toggle = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  const handleViewStore = (index) => {
    // Logique de visualisation (à implémenter)
    console.log("View store index:", index);
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
              {/* <CardHeader>
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1 py-4">
                  <Link to="/formulaire"> 
                    <Button color="info" onClick={() => { setIsEdit(false); toggle(); }}>
                      <i className="ri-add-fill me-1 align-bottom"></i> Ajouter une plainte
                    </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader> */}
              <Card>
                <CardBody>
                  <Table className="table-centered table-nowrap mb-0" style={{ fontSize: '16px' }}>
                    <thead className="table-light">
                      <tr>
                        <th>N°</th>
                        <th>Nom et Prénom</th>
                        <th>Téléphone</th>
                        <th>Commune</th>
                        <th>Arrondissement</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedCompanies.map((company, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{company.nom}</td>
                          <td>{company.tel}</td>
                          <td>{company.commune}</td>
                          <td>{company.arrondissement}</td>
                          <td>
                            <Link to={`/details-plaignant/${company.id}`} className="text-info" onClick={() => handleViewStore(index)}>
                              <i className="las la-eye" style={{ color: '#39FF14' }} id={`viewtooltip-${index}`} />
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

export default withRouter(CrmCompanies);
