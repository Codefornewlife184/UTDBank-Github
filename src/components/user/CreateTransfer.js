import React, { useState,useEffect } from "react";

import {
  BsFillChatLeftFill,
  BsCashStack,
  BsCurrencyExchange,
  BsFillCreditCard2BackFill,
} from "react-icons/bs";

import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { createTransfer } from "../../api/transfer-service";
import { Form, Button, Spinner, Row, Col, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate ,useParams } from "react-router-dom";

const CreateTransfer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { accountNo,currencyCode } = useParams();
    useEffect(() => {
      console.log(accountNo)
    }, [])
  const initialValues = {
    fromAccountId: accountNo,
    toAccountId: "",
    transactionAmount: "",
    currencyCode: currencyCode,
    description: "",
  };

  const validationSchema = Yup.object({
    fromAccountId: Yup.string().required("Enter your account number"),
    toAccountId: Yup.string().required("Enter other account number"),
    transactionAmount: Yup.number()
      .min(100, "Min taransfer amount should be 100")
      .required("Amount is required"),
    currencyCode: Yup.string().required("Currency code is required"),
    description: Yup.string().required("Description is required"),
  });

  const onSubmit = (values) => {
  
    setLoading(true);
    createTransfer(values)
      .then((resp) => {
        setLoading(false);
        toast("Transfer succeed");
      })
      .catch((err) => {
        toast("An error occurred");
        setLoading(false);
        navigate("/CreateTransfer");
      });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Row>
        <Col lg={10}>
          <Row>
            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Account No:</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <BsFillCreditCard2BackFill />
                  </span>
                </div>
                <Form.Control
                  type="number"
                  {...formik.getFieldProps("fromAccountId")}
                  isInvalid={!!formik.errors.fromAccountId}
                  placeholder="from Account"
                  disabled
                />
              </div>
            </Form.Group>
            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>To Account No:</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <BsFillCreditCard2BackFill />
                  </span>
                </div>
                <Form.Control
                  type="number"
                  {...formik.getFieldProps("toAccountId")}
                  isInvalid={!!formik.errors.toAccountId}
                  placeholder="to Account"
                />
              </div>
            </Form.Group>
            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Amount:</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <BsCashStack />
                  </span>
                </div>
                <Form.Control
                  type="number"
                  {...formik.getFieldProps("transactionAmount")}
                  isInvalid={!!formik.errors.transactionAmount}
                  placeholder="Amount"
                />
              </div>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Currency:</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <BsCurrencyExchange />
                  </span>
                </div>
                <Form.Control
                  {...formik.getFieldProps("currencyCode")}
                  isInvalid={!!formik.errors.currencyCode}
                  disabled
                >
                </Form.Control>

                <Form.Control.Feedback type="invalid">
                  {formik.errors.currencyCode}
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Description:</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <BsFillChatLeftFill />
                  </span>
                </div>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("description")}
                  isInvalid={!!formik.errors.description}
                  placeholder="Transfer description"
                />
              </div>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <div className="text-end">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading && (
              <Spinner animation="border" variant="light" size="sm" />
            )}
            Transfer
          </Button>
        </ButtonGroup>
      </div>
    </Form>
  );
};

export default CreateTransfer;
