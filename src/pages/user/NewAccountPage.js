import React from 'react'
import { Card, Container } from 'react-bootstrap'
import AccountForm from '../../components/account/AccountForm'
import PageHeader from '../../components/common/PageHeader'
import Spacer from '../../components/common/Spacer'

const NewAccountPage = () => {
  return (
    <>
      <PageHeader title="New Account" />
      <Spacer />
      <Container>
        <Card>
          <Card.Body>
            <AccountForm />
          </Card.Body>
        </Card>
      </Container>
      <Spacer />
    </>
  )
}

export default NewAccountPage
