import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TransferDetail from "../../components/user/TransferDetail";
import { useParams } from "react-router";

const TransferDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <PageHeader title="Transfers Detail" />
      <Spacer />
      <Container>
        <Row>
          <Col>
            <TransferDetail id={id} />
          </Col>
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default TransferDetailPage;
