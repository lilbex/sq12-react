import React from "react";
import styled from "styled-components";
import Input from "../input";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../Button";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
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
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
        <div>
          <Button type="submit" title="Submit" />
        </div>
        
        <p>
          Don't have an account? Register <Link to="/signup">here</Link>
        </p>
      </div>
      </form>
    </FormWrapper>
  );
};

export default LoginPage;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
