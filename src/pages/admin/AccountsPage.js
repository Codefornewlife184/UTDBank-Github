import React from "react";
import { Container } from "react-bootstrap";
import Accounts from "../../components/account/Accounts";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";

const AccountsPage = () => {
  return (
    <>
      <PageHeader title="Accounts" />
      <Spacer />
      <Container>
        <Accounts />
      </Container>
      <Spacer />
    </>
  );
};

export default AccountsPage;
