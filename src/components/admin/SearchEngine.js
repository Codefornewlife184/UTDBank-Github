import React, { useState, useEffect } from "react";
import { Table, Button, ButtonGroup, Container, Form, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getSearch } from "../../api/admin-search-service";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const SearchEngine = () => {
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState();
  const initialValues = {
    ssn: "",
    firstName: "",
    lastName: "",
    mobilePhoneNumber: "",
    email: "",
  };

  const onSubmit = (values) => {
    getSearch(values)
      .then((resp) => {
        setUsers(resp.data);
        setLoadingUsers(false);
        if (resp.data === []) {
        }
      })
      .catch((err) => {
        toast("An error occured. Please try later.");
        console.log(err.response.data.message);
        setLoadingUsers(false);
      });
  };

  const handleEdit = (userId) => {
    navigate(`/admin/users/${userId}`);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
  });

  //  useEffect(() => {
  //    getUsers().then((resp) => {
  //      setUsers(resp.data);
  //      setLoadingUsers(false);
  //    });
  //  }, []);

  //useEffect(() => {}, []);

  return (
    <Container>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row>
          <Form.Group as={Col} md={4} lg={2} className="mb-3">
            <Form.Label>SSN Search</Form.Label>
            <div className="input-group">
              <div className="input-group-prepend"></div>
              <Form.Control type="search" placeholder="Enter SSN ... " {...formik.getFieldProps("ssn")}></Form.Control>
            </div>
          </Form.Group>
          <Form.Group as={Col} md={4} lg={2} className="mb-3">
            <Form.Label>First Name</Form.Label>
            <div className="input-group">
              <div className="input-group-prepend"></div>
              <Form.Control
                type="search"
                placeholder="Enter First Name  ... "
                {...formik.getFieldProps("firstName")}
              ></Form.Control>
            </div>
          </Form.Group>
          <Form.Group as={Col} md={4} lg={2} className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <div className="input-group">
              <div className="input-group-prepend"></div>
              <Form.Control
                type="search"
                placeholder="Enter Last Name  ... "
                {...formik.getFieldProps("lastName")}
              ></Form.Control>
            </div>
          </Form.Group>
          <Form.Group as={Col} md={4} lg={2} className="mb-3">
            <Form.Label>E Mail</Form.Label>
            <div className="input-group">
              <div className="input-group-prepend"></div>
              <Form.Control
                type="search"
                placeholder="Enter E Mail ... "
                {...formik.getFieldProps("email")}
              ></Form.Control>
            </div>
          </Form.Group>
          <Form.Group as={Col} md={4} lg={2} className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <div className="input-group">
              <div className="input-group-prepend"></div>
              <Form.Control
                type="search"
                placeholder="Enter Phone Number ... "
                {...formik.getFieldProps("mobilePhoneNumber")}
              ></Form.Control>
            </div>
          </Form.Group>

          <Button variant="primary" type="submit">
            Search
          </Button>

          {/* <ButtonGroup className="searchbar-button" aria-label="Basic example">
        <Button variant="primary" as={Link} to="/admin/users/new">
          New User
        </Button>
      </ButtonGroup>
 */}
        </Row>
      </Form>

      <Table striped bordered hover responsive className="admin-list mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>SSN</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Id</th>
            <th>Email</th>
            <th>Roles</th>
          </tr>
        </thead>

        {users.map((value, key) => {
          return (
            <tbody>
              <tr key={key} onClick={() => handleEdit(value.id)} className="cursor-hand">
                <td>{key + 1}</td>
                <td>{value.ssn}</td>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.id}</td>
                <td>{value.email}</td>
                <td>{value.roles.join(" ")}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>

      <ButtonGroup className="searchbar-button" aria-label="Basic example">
        <Button variant="primary" as={Link} to="/admin/users/new">
          New User
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default SearchEngine;
