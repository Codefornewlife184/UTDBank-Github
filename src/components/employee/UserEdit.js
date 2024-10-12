import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {
  Form,
  Button,
  Spinner,
  Row,
  Col,
  ButtonGroup,
  Alert,
} from "react-bootstrap";
import {
  deleteUser,
  getUserById,
  updateUser,
} from "../../api/admin-user-service";
import MaskInput from "react-maskinput/lib";
import alertify from "alertifyjs";
import { useNavigate, useParams } from "react-router-dom";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const UserEdit = () => {
  const [initialValues, setInitialValues] = useState({
    ssn: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "null",
    address: "",
    mobilePhoneNumber: "",
    roles: ["Customer"],
    builtIn: false,
  });

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const validationSchema = Yup.object({
    ssn: Yup.string().required("Please enter ssn"),
    firstName: Yup.string().required("Please enter first name"),
    lastName: Yup.string().required("Please enter last name"),
    email: Yup.string().email().required("Please enter email"),
    password: Yup.string().required("Please enter password"),
    address: Yup.string().required("Please enter address"),
    mobilePhoneNumber: Yup.string()
      .required("Please enter phone number")
      .test(
        "includes_",
        "Please enter a valid phone number",
        (value) => value && !value.includes("_")
      ),
    roles: Yup.array().required("Please select a role"),
  });

  const handleShowPassword = () => {
    show ? setShow(false) : setShow(true);
  };

  const onSubmit = (values) => {
    setSaving(true);

    updateUser(userId, values)
      .then((resp) => {
        setSaving(false);
        toast("User was updated successfully");
      })
      .catch((err) => {
        toast("An error occured. Please try again later.");
        setSaving(false);
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
    //userId nin boş olmadığı veya numeric olduğu kontrol edilse iyi olur.

    alertify.confirm(
      "Delete",
      "Are you sure want to delete?",
      () => {
        setDeleting(true);
        deleteUser(userId)
          .then((resp) => {
            setDeleting(false);
            toast("User was deleted uccessfully");
            navigate(-1);
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
    //userId nin boş olmadığı veya numeric olduğu kontrol edilse iyi olur.

    getUserById(userId).then((resp) => {
      console.log(resp.data);
      setInitialValues(resp.data);
    });
  }, []);

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Row>
        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Ssn No</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("ssn")}
            isInvalid={!!formik.errors.ssn}
            as={MaskInput}
            maskChar="_"
            mask="000-00-0000"
            placeholder="SSN"
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.ssn}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            {...formik.getFieldProps("firstName")}
            isInvalid={!!formik.errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            {...formik.getFieldProps("lastName")}
            isInvalid={!!formik.errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formik.values.email}
            isInvalid={!!formik.errors.email}
            {...formik.getFieldProps("email")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={show ? "text" : "password"}
            placeholder="Enter password"
            {...formik.getFieldProps("password")}
            isInvalid={!!formik.errors.password}
          />

          {formik.errors.password && formik.touched.password && (
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          )}
          <span className="input-group-text">
            {show ? (
              <i onClick={handleShowPassword}>
                <VscEye />
              </i>
            ) : (
              <i onClick={handleShowPassword}>
                <VscEyeClosed />
              </i>
            )}
          </span>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            {...formik.getFieldProps("address")}
            isInvalid={!!formik.errors.address}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.address}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            as={MaskInput}
            alwaysShowMask
            maskChar="_"
            mask="(000) 000-0000"
            placeholder="Enter phone number"
            {...formik.getFieldProps("mobilePhoneNumber")}
            isInvalid={!!formik.errors.mobilePhoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.mobilePhoneNumber}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} lg={3} className="mb-3">
          <Form.Label>Roles</Form.Label>

          <div className="mb-3">
            <Form.Check
              inline
              label="Customer"
              type="checkbox"
              name="roles"
              id="customer"
              value="Customer"
              checked={formik.values.roles.includes("Customer")}
              onChange={formik.handleChange}
            />
          </div>
          <Form.Control.Feedback type="invalid">
            {formik.errors.roles}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {initialValues.builtIn && (
        <Alert variant="danger">
          Built-in accounts can not be deleted and updated
        </Alert>
      )}
      <div className="text-end">
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            type="button"
            variant="secondary"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          {!initialValues.builtIn && (
            <>
              <Button variant="primary" type="submit" disabled={saving}>
                {saving && (
                  <Spinner animation="border" variant="light" size="sm" />
                )}{" "}
                Save
              </Button>
              <Button
                type="button"
                variant="danger"
                disabled={deleting}
                onClick={handleDelete}
              >
                {deleting && (
                  <Spinner animation="border" variant="light" size="sm" />
                )}{" "}
                Delete
              </Button>
            </>
          )}
        </ButtonGroup>
      </div>
    </Form>
  );
};
export default UserEdit;
