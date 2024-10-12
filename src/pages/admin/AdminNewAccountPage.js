import React from 'react'
import { Card, Container } from 'react-bootstrap'
import AdminAccountForm from '../../components/account/admin/AdminAccountForm'
import PageHeader from '../../components/common/PageHeader'
import Spacer from '../../components/common/Spacer'

const AdminNewAccountPage = () => {
  return (
    <>
      <PageHeader title="Admin New Account " />
      <Spacer />
      <Container>
        <Card>
          <Card.Body>
            <AdminAccountForm />
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default AdminNewAccountPage
