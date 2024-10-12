import React, { useState, useEffect } from "react";
import { Form, Row, Col, Spinner, ButtonGroup, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { deleteAccountByAccountNo, getAccountByAccountNo, updateAccountByAccountNo } from "../../api/user-account";
import alertify from "alertifyjs";

const currencyCodes = ["EUR", "TRY", "USD"];
const accountTypes = ["INVESTING", "SAVING", "CREDIT_CARD", "CHECKING"];
const accountStatusTypes = ["SUSPENDED", "CLOSED", "ACTIVE"];

const AccountEdit = () => {
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [account, setAccount] = useState([]);
  const { accountNo } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    description: "",
    balance: "",
    currencyCode: "",
    accountType: "",
    accountStatusType: "",
  });

  const validationSchema = Yup.object({
    description: Yup.string().required("Type a description please."),
    balance: Yup.string().required("Type a balance please."),
    currencyCode: Yup.string().required("Select a currency code please."),
    accountType: Yup.string().required("Select a account type please."),
    accountStatusType: Yup.string().required("Select a account status type please."),
  });

  const onSubmit = (values) => {
    delete values["createdDate"];
    delete values["closedDate"];

    setLoading(true);
    console.log(values);
    const accountDto = {
      description: values.description,
      balance: values.balance,
      currencyCode: values.currencyCode,
      accountType: values.accountType,
      accountStatusType: values.accountStatusType,
    };
    updateAccountByAccountNo(accountNo, accountDto)
      .then((resp) => {
        setLoading(false);
        toast("Account was updated successfully");
        navigate("/user/accounts");
      })
      .catch((err) => {
        toast("An error occured. Please try again later.");
        setLoading(false);
        console.log(err.response.data.message);
      });
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });
  const handleDelete = () => {
    alertify.confirm(
      "Delete",
      "Are you sure want to delete?",
      () => {
        setDeleting(true);
        deleteAccountByAccountNo(accountNo)
          .then((resp) => {
            setDeleting(false);
            toast("Account was deleted successfully");
            navigate("/user/accounts");
          })
          .catch((err) => {
            setDeleting(false);
            toast("An error occured. Please try later");
            console.log(err.response.data.message);
          });
      },
      () => {
        console.log("canceled");
      }
    );
  };

  useEffect(() => {
    getAccountByAccountNo(accountNo).then((resp) => {
      setInitialValues(resp.data);
    });
  }, []);

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Row>
        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Decsription</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Type a description"
            {...formik.getFieldProps("description")}
            isInvalid={!!formik.errors.description}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.description}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Balance</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type a balance"
            {...formik.getFieldProps("balance")}
            isInvalid={!!formik.errors.balance}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.balance}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Currency Code</Form.Label>
          <Form.Select {...formik.getFieldProps("currencyCode")} isInvalid={!!formik.errors.currencyCode}>
            <option value="EUR">EUR</option>
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">{formik.errors.currencyCode}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Account Type</Form.Label>
          <Form.Select {...formik.getFieldProps("accountType")} isInvalid={!!formik.errors.accountType}>
            <option value="INVESTING">INVESTING</option>
            <option value="SAVING">SAVING</option>
            <option value="CREDIT_CARD">CREDIT_CARD</option>
            <option value="CHECKING">CHECKING</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">{formik.errors.accountType}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Account Status Type</Form.Label>
          <Form.Select {...formik.getFieldProps("accountStatusType")} isInvalid={!!formik.errors.accountStatusType}>
            <option value="SUSPENDED">SUSPENDED</option>
            <option value="CLOSED">CLOSED</option>
            <option value="ACTIVE">ACTIVE</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">{formik.errors.accountStatusType}</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className="text-end">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading && <Spinner animation="border" variant="light" size="sm" />} Save
          </Button>
          <Button variant="secondary" type="button" variant="secondary" onClick={() => navigate("/user/accounts")}>
            Cancel
          </Button>
          <Button type="button" variant="danger" disabled={deleting} onClick={handleDelete}>
            {deleting && <Spinner animation="border" variant="light" size="sm" />} Delete
          </Button>
        </ButtonGroup>
      </div>
    </Form>
  );
};

export default AccountEdit;
