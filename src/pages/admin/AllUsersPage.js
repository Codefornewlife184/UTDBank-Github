import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import AllUsers from "../../components/admin/AllUsers";

const AllUsersPage = () => {
  return (
    <>
      <PageHeader title="Users" />
      <Spacer />
      <Container>
        <Row>
          <Col>
            <AllUsers />
          </Col>
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default AllUsersPage;
