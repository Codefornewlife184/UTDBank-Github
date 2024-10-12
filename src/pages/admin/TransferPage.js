import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Transfers from "../../components/admin/Transfers";

const TransferPage = () => {
  return (
    <>
      <PageHeader title="Transfers" />
      <Spacer />
      <Container>
        <Row>
          <Col>
            <Transfers />
          </Col>
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default TransferPage;
