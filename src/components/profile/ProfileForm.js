import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Form, Button, Spinner } from "react-bootstrap";
import MaskInput from "react-maskinput/lib";
import { getUser, updateUser } from "../../api/user-service";
import { useContext } from "../../context";
import { userUpdated } from "../../context/user/userActions";
import { useNavigate } from "react-router-dom";
const ProfileForm = ({ user }) => {
  const [loading, setLoading] = useState(false);

  const { dispatchUser } = useContext();
  const navigate = useNavigate();
  const initialValues = {
    ssn: user.ssn,
    firstName: user.firstName,
    lastName: user.lastName,
    mobilePhoneNumber: user.mobilePhoneNumber,
    email: user.email,
    address: user.address,
  };

  /*
    Object.keys(user).length > 0
      (?) user
      : {

          ssn: "",
          firstName: "",
          lastName: "",
          mobilePhoneNumber: "",
          email: "",
          address: "",

        };
*/

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),

    mobilePhoneNumber: Yup.string().required("Please enter your phone number"),
    email: Yup.string().email().required("Please enter your email"),
    address: Yup.string().required("Please enter your address"),
    ssn: Yup.string().required("Please enter your ssn"),
  });

  const onSubmit = (values) => {
    const userDto = {
      firstName: values.firstName,
      lastName: values.lastName,
      mobilePhoneNumber: values.mobilePhoneNumber,
      email: values.email,
      address: values.address,
    };

    setLoading(true);
    updateUser(userDto)
      .then(() => {
        toast("Your profile updated successfully");
        getUser().then((resp) => {
          console.log(resp.data);
          dispatchUser(userUpdated(resp.data));
        });
        setLoading(false);
        navigate("/profile");
      })
      .catch((err) => {
        toast("An error occured. Please try later.");
        console.log(err.response.data.message);
        setLoading(false);
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
      <Form.Group className="form-group mb-15">
        <Form.Label>Ssn No</Form.Label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="flaticon-agenda"></i>
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
            readOnly
          />

          <Form.Control.Feedback type="invalid">
            {formik.errors.ssn}
          </Form.Control.Feedback>
        </div>
      </Form.Group>

      <Form.Group className="form-group mb-15">
        <Form.Label>First Name</Form.Label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="flaticon-user"></i>
            </span>
          </div>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            {...formik.getFieldProps("firstName")}
            isInvalid={!!formik.errors.firstName}
          />

          <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
          </Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </div>
      </Form.Group>

      <Form.Group className="form-group mb-15">
        <Form.Label>Last Name</Form.Label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="flaticon-user"></i>
            </span>
          </div>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            {...formik.getFieldProps("lastName")}
            isInvalid={!!formik.errors.lastName}
          />

          <Form.Control.Feedback type="invalid">
            {formik.errors.lastName}
          </Form.Control.Feedback>
        </div>
      </Form.Group>

      <Form.Group className="form-group mb-15">
        <Form.Label>Phone Number</Form.Label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="flaticon-phone-call"></i>
            </span>
          </div>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            as={MaskInput}
            alwaysShowMask
            maskChar="_"
            mask="(000) 000-0000"
            {...formik.getFieldProps("mobilePhoneNumber")}
            isInvalid={!!formik.errors.mobilePhoneNumber}
          />

          <Form.Control.Feedback type="invalid">
            {formik.errors.mobilePhoneNumber}
          </Form.Control.Feedback>
        </div>

        <Form.Group className="form-group mb-15">
          <Form.Label>Email</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="flaticon-email"></i>
              </span>
            </div>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formik.values.email}
              disabled
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Group className="form-group mb-15">
          <Form.Label>Address</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="flaticon-globe"></i>
              </span>
            </div>
            <Form.Control
              type="text"
              placeholder="Enter address"
              {...formik.getFieldProps("address")}
              isInvalid={!!formik.errors.address}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.address}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Control.Feedback type="invalid">
          {formik.errors.address}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" disabled={loading}>
        {loading && <Spinner animation="border" variant="light" size="sm" />}{" "}
        Save
      </Button>
    </Form>
  );
};

export default ProfileForm;