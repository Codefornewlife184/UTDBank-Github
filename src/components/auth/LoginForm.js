import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useFormik } from "formik";
import { getUser, login } from "../../api/user-service";

import { toast, ToastContainer } from "react-toastify";
import { useContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { loginFailed, loginSuccess } from "../../context/user/userActions";
import MaskInput from "react-maskinput/lib";
import { VscEye, VscEyeClosed } from "react-icons/vsc";


const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { dispatchUser } = useContext();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const initialValues = {
    ssn: "",
    password: "",
  };

  const validationSchema = Yup.object({
    ssn: Yup.string().required("SSN number is required"),

    password: Yup.string()
      .min(4, "Password must be at least 5 character")
      .required("Password is required"),
  });

  const handleShowPassword = () => {
    show ? setShow(false) : setShow(true);
  };

  const onSubmit = (values) => {
    setLoading(true);

    login(values)
      .then((respLogin) => {
        localStorage.setItem("token", respLogin.data.token);

        getUser()
          .then((respUser) => {
            dispatchUser(loginSuccess(respUser.data));
            console.log(respUser.data);
            navigate("/");

            setLoading(false);
          })
          .catch((err) => {
            toast("An error occurred");
            setLoading(false);
            dispatchUser(loginFailed());
          });
      })
      .catch((err) => {
        toast("An error occurred");
        setLoading(false);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="authentication-form">
      <Row className="row">
        <Col className="col-sm-12 col-md-12 col-lg-12">
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="form-group mb-15" controlId="">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
                  </span>
                </div>

                <Form.Control
                  type="text"
                  {...formik.getFieldProps("ssn")}
                  isInvalid={!!formik.errors.ssn}
                  as={MaskInput}
                  maskChar="_"
                  mask="000-00-0000"
                  placeholder="SSN"
                />

                {formik.errors.ssn && formik.touched.ssn && (
                  <Form.Control.Feedback id class="formControl" type="invalid">
                    {formik.errors.ssn}
                  </Form.Control.Feedback>
                )}
              </div>
            </Form.Group>

            <Form.Group className="form-group mb-15" controlId="">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-approval"></i>
                  </span>
                </div>
                <Form.Control
                  type={show ? "text" : "password"}
                  {...formik.getFieldProps("password")}
                  isInvalid={!!formik.errors.password}
                  placeholder="Password"
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
              </div>
            </Form.Group>

            <Button variant="danger" type="submit" disabled={loading}>
              {loading && <Spinner animation="border" size="sm" />} Login
            </Button>
          </Form>
        </Col>
      </Row>

      <ToastContainer />
    </Container>
  );
};

export default LoginForm;
