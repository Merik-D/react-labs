import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (values, { setSubmitting }) => {
    const storedUsers = JSON.parse(localStorage.getItem("usersList")) || [];
    const user = storedUsers.find((user) => user.email === values.email);

    if (user && values.password === user.password) {
      user.isLoggedin = true;
      localStorage.setItem("usersList", JSON.stringify(storedUsers));
      console.log("Successfully logged in. Redirecting to /");
      onLogin();
      navigate("/");
    } else {
      console.log("Invalid credentials.");
      alert("Invalid credentials");
    }

    setSubmitting(false);
  };

  return (
    <div className="section">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form className="formContainer">
            <label>Email:</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" />
            <br />
            <label >Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
