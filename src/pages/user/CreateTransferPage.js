import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import CreateTransfer from "../../components/user/CreateTransfer";
import ProfileForm from "../../components/profile/ProfileForm";
import { useContext } from "../../context";


const CreateTransferPage = () => {
        const { userState } = useContext();
        const { user } = userState;
    return (
        <>
          <PageHeader title="CreateTransfer" />
      <Spacer />
      <Container><CreateTransfer/></Container>
      <Spacer />
        </>
      );
    };
export default CreateTransferPage;
