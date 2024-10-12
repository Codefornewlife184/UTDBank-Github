import React from "react";
import { Container } from "react-bootstrap";

import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import Users from "../../components/employee/Users";

const UsersPageEmployee = () => {
  return (
    <>
      <PageHeader title="User Management for Employee" />
      <Spacer />
      <Container>
        <Users />
      </Container>
      <Spacer />
    </>
  );
};

export default UsersPageEmployee;
