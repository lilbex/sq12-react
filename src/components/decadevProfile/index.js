import React, { useRef } from "react";
import styled from "styled-components";
import Input from "../input";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const urlRegex =
  /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.number()
    .required("Phone Number is required")
    .min(11, "Phone number cannot be more than 11 digits"),
  linkedinUrl: Yup.string()
    .matches(urlRegex, "Invalid url")
    .required("Linkedin Url is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      passwordRegex,
      "Password must contain at least 8 characters, 1 uppercase letter and 1 number"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function Index() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    linkedinUrl: "",
    password: "",
    confirmPassword: "",
  };
  const inputRef = useRef(null);

  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  const navigate = useNavigate();

  return (
    <FormWrapper>
      <h3 className="h3" onClick={() => navigate("/category")}>
        Decadev Profile
      </h3>
      <Link to="/category">category</Link>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            ref={inputRef}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div>
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <Input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
            <div className="error">{formik.errors.phoneNumber}</div>
          ) : null}
        </div>
        <div>
          <Input
            type="text"
            name="linkedinUrl"
            placeholder="linkedin url"
            onChange={formik.handleChange}
            value={formik.values.linkedinUrl}
          />
          {formik.errors.linkedinUrl && formik.touched.linkedinUrl ? (
            <div className="error">{formik.errors.linkedinUrl}</div>
          ) : null}
        </div>
        <div>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          <Input
            type="Password"
            name="confirmPassword"
            placeholder="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <div style={{ marginTop: "30px" }}>
          <Button type="submit" title="Submit" />
        </div>
        <p>
          Already have an acount? Login <Link to="/login">here</Link>
        </p>
      </form>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  form {
    width: 400px;
    padding: 50px;
    border: 1px solid #ccc;
  }
  .error {
    color: red;
    font-size: 12px;
  }
  .h3 {
    cursor: pointer;
  }
`;
