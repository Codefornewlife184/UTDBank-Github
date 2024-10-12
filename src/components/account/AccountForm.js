import React, { useState } from 'react'
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Container,
  Row,
  Col,
  FloatingLabel,
} from 'react-bootstrap'
import { MdAccountBalance, MdOutlineDescription } from 'react-icons/md'
import { GiPayMoney, GiTakeMyMoney } from 'react-icons/gi'
import { VscGroupByRefType } from 'react-icons/vsc'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { createAccount } from '../../api/user-account'
import { toast } from 'react-toastify'
import { useContext } from '../../context'
import { setAccountState } from '../../context/account/accountActions'
import { useNavigate } from 'react-router-dom'

const AccountForm = () => {
  const [loading, setLoading] = useState(false)
  const { dispatchAccount, userState } = useContext()
  const { isUserLogin } = userState
  const navigate = useNavigate()

  const initialValues = {
    description: '',
    balance: '',
    currencyCode: '',
    accountType: '',
    accountStatusType: '',
  }

  const validationSchema = Yup.object({
    description: Yup.string().required('Type a description please.'),
    balance: Yup.string().required('Type a balance please.'),
    currencyCode: Yup.string().required('Select a currency code please.'),
    accountType: Yup.string().required('Select a account type please.'),
    accountStatusType: Yup.string().required(
      'Select a account status type please.',
    ),
  })

  const onSubmit = (values) => {
    console.log(values)
    if (!isUserLogin) {
      toast('Please first login')
      return
    }
    setLoading(true)
    createAccount(values)
      .then((resp) => {
        toast('Your account created')
        dispatchAccount(setAccountState(values))
        setLoading(false)
        navigate('/user/accounts')
      })
      .catch((err) => {
        toast('An error occured. Please try later.')
        setLoading(false)
      })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <Container>
      <Row style={{ alignItems: 'center' }}>
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" style={{ flex: 2 }}>
                <MdOutlineDescription size={32} />
                &nbsp; Decsription
              </InputGroup.Text>
              <FormControl
                placeholder="Type a description"
                style={{ flex: 3 }}
                {...formik.getFieldProps('description')}
                isInvalid={!!formik.errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.description}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" style={{ flex: 2 }}>
                <MdAccountBalance size={32} />
                &nbsp; Balance
              </InputGroup.Text>
              <FormControl
                placeholder="Type a balance"
                style={{ flex: 3 }}
                {...formik.getFieldProps('balance')}
                isInvalid={!!formik.errors.balance}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.balance}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" style={{ flex: 1 }}>
                <GiTakeMyMoney size={32} />
                &nbsp; Currency Code
              </InputGroup.Text>

              <Form.Select
                aria-label="Floating label select example"
                style={{ flex: 2 }}
                {...formik.getFieldProps('currencyCode')}
                isInvalid={!!formik.errors.currencyCode}
              >
                <option value="">Select Curreny Code</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
                <option value="USD">USD</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.currencyCode}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" style={{ flex: 1 }}>
                <GiPayMoney size={32} />
                &nbsp; Account Type
              </InputGroup.Text>

              <Form.Select
                aria-label="Floating label select example"
                style={{ flex: 2 }}
                {...formik.getFieldProps('accountType')}
                isInvalid={!!formik.errors.accountType}
              >
                <option value="">Select Account Type</option>
                <option value="INVESTING">INVESTING</option>
                <option value="SAVING">SAVING</option>
                <option value="CREDIT_CARD">CREDIT_CARD</option>
                <option value="CHECKING">CHECKING</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.accountType}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" style={{ flex: 1 }}>
                <VscGroupByRefType size={32} />
                &nbsp; Account Status Type
              </InputGroup.Text>

              <Form.Select
                aria-label="Floating label select example"
                style={{ flex: 2 }}
                {...formik.getFieldProps('accountStatusType')}
                isInvalid={!!formik.errors.accountStatusType}
              >
                <option value="">Select Status Type</option>
                <option value="SUSPENDED">SUSPENDED</option>
                <option value="CLOSED">CLOSED</option>
                <option value="ACTIVE">ACTIVE</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.accountStatusType}
              </Form.Control.Feedback>
            </InputGroup>
            <Button size="lg" className="w-100" type="submit">
              CREATE ACCOUNT
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default AccountForm
