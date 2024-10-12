import React from "react";
import { Container } from "react-bootstrap";
import UserNew from "../../components/employee/UserNew";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";

const UsersNewPageEmployee = () => {
  return (
    <>
      <PageHeader title="User Management for Employee" />
      <Spacer />
      <Container>
        <UserNew />
      </Container>
      <Spacer />
    </>
  );
};

export default UsersNewPageEmployee;
