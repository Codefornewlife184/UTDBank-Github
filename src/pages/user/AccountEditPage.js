import React from 'react'
import { Container } from 'react-bootstrap'
import AccountEdit from '../../components/account/AccountEdit'
import PageHeader from '../../components/common/PageHeader'
import Spacer from '../../components/common/Spacer'

const AccountEditPage = () => {
  return (
    <>
      <PageHeader title="Account Edit" />
      <Spacer />
      <Container>
        <AccountEdit />
      </Container>
      <Spacer />
    </>
  )
}

export default AccountEditPage
