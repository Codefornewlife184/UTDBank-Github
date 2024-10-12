import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Form, Button, Spinner, InputGroup } from "react-bootstrap";
import { updatePassword } from "../../api/user-service";
import { useLinkClickHandler } from "react-router-dom";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const PasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required("Please enter your current password"),
    newPassword: Yup.string().required("Please enter your new password"),
    confirmPassword: Yup.string()
      .required("Please enter new password retry")
      .oneOf([Yup.ref("newPassword"), null], "Passwords dosen`t match"),
  });

  const handleShowPassword = () => {
    show ? setShow(false) : setShow(true);
  };

  const onSubmit = (values) => {
    setLoading(true);
    updatePassword(values)
      .then((resp) => {
        toast("Your password was updated successfully");
        setLoading(false);
      })
      .catch((err) => {
        toast("An error occured. Please try later");
        setLoading(false);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Label>Old Password</Form.Label>
      <Form.Group className="form-group mb-15">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="flaticon-approval"></i>
            </span>
          </div>

          <Form.Control
            type={show ? "text" : "password"}
            {...formik.getFieldProps("oldPassword")}
            isInvalid={!!formik.errors.oldPassword}
            placeholder="Old Password"
          />
          {formik.errors.password && formik.touched.password && (
            <Form.Control.Feedback type="invalid">
              {formik.errors.oldPassword}
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

      <Form.Group className="form-group mb-15">
        <Form.Label>New Password</Form.Label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="flaticon-approval"></i>
            </span>
          </div>

          <Form.Control
            type={show ? "text" : "password"}
            {...formik.getFieldProps("newPassword")}
            isInvalid={!!formik.errors.newPassword}
            placeholder="New Password"
          />
          {formik.errors.password && formik.touched.password && (
            <Form.Control.Feedback type="invalid">
              {formik.errors.newPassword}
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

      <Form.Group className="form-group mb-15">
        <Form.Label>New Password (Retry)</Form.Label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="flaticon-approval"></i>
            </span>
          </div>

          <Form.Control
            type={show ? "text" : "password"}
            {...formik.getFieldProps("confirmPassword")}
            isInvalid={!!formik.errors.confirmPassword}
            placeholder="Confirm Password"
          />
          {formik.errors.password && formik.touched.password && (
            <Form.Control.Feedback type="invalid">
              {formik.errors.confirmPassword}
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
      <Button type="submit" disabled={loading}>
        {loading && <Spinner animation="border" variant="light" size="sm" />}{" "}
        Update Password
      </Button>
    </Form>
  );
};

export default PasswordForm;
