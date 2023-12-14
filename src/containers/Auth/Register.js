import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleRegister = (values) => {
    const existingUsers = JSON.parse(localStorage.getItem("usersList")) || [];

    const isEmailRegistered = existingUsers.some(
      (user) => user.email === values.email
    );

    if (isEmailRegistered) {
      alert("Email is already registered. Please use a different email.");
    } else {
      const newUser = {
        userName: values.userName,
        email: values.email,
        password: values.password,
        isLoggedin: true,
      };

      existingUsers.push(newUser)

      localStorage.setItem("usersList", JSON.stringify(existingUsers));
      onLogin();
      navigate("/");
    }
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Confirm Password is required"),
  });

  return (
    <div className="section">
      <h2>Registration</h2>
      <Formik
        className="formContainer"
        initialValues={{
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        <Form className="formContainer">
          <label>Username:</label>
          <Field type="text" name="userName" />
          <ErrorMessage name="userName" component="div" />
          <br />
          <label>Email:</label>
          <Field type="text" name="email" />
          <ErrorMessage name="email" component="div" />
          <br />
          <label>Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <br />
          <label>Confirm Password:</label>
          <Field type="password" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" />
          <br />
          <button type="submit">Register</button>
        </Form>
      </Formik>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
