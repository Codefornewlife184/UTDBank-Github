import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import AccountsByUser from "../../components/admin/AccountsByUser";
import { useParams } from "react-router";

const AccountsByUserPage = () => {
  const { userId } = useParams();
  return (
    <>
      <PageHeader title="Accounts" />
      <Spacer />
      <Container>
        <Row>
          <Col>
            <AccountsByUser userId={userId} />
          </Col>
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default AccountsByUserPage;
