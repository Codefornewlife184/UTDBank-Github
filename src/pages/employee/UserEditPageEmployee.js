import React from "react";
import { Container } from "react-bootstrap";
import UserEdit from "../../components/employee/UserEdit";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";

const UserEditPageEmployee = () => {
  return (
    <>
      <PageHeader title="User Management for Employee" />
      <Spacer />
      <Container>
        <UserEdit />
      </Container>
      <Spacer />
    </>
  );
};

export default UserEditPageEmployee;
