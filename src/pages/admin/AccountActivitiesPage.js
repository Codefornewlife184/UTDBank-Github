import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import AccountActivities from "../../components/admin/AccountActivities";
import { useParams } from "react-router";

const AccountActivitiesPage = () => {
  const { accountNo } = useParams();
  return (
    <>
      <PageHeader title="Account Activities" />
      <Spacer />
      <Container>
        <Row>
          <Col>
            <AccountActivities accountNo={accountNo} />
          </Col>
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default AccountActivitiesPage;
