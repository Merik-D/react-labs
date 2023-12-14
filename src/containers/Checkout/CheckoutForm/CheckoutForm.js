import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./CheckoutForm.css";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .matches(/^[a-zA-Z]+$/, "Invalid first name format. Only letters are allowed.")
    .max(30, "First name must be at most 30 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .trim()
    .matches(/^[a-zA-Z]+$/, "Invalid last name format. Only letters are allowed.")
    .max(30, "Last name must be at most 30 characters")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .max(50, "Email must be at most 50 characters")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\+38\d{10}$/, {
      message: "Invalid phone number format. Should start with +38 and have 12 digits.",
      excludeEmptyString: true,
    })
    .required("Phone is required"),
  address: Yup.string()
    .trim()
    .max(100, "Address must be at most 100 characters")
    .required("Address is required"),
});


const CheckoutForm = ({ setFormSubmitted }) => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    setFormSubmitted(true);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="formContainer">
          <div className="labelContainer">
            <label className="form_labal">
              First Name
              <Field name="firstName" type="text" />
              <div className="errorContainer">
                <ErrorMessage message={touched.firstName && errors.firstName} />
              </div>
            </label>
            <label className="form_labal">
              Last Name
              <Field name="lastName" type="text" />
              <div className="errorContainer">
                <ErrorMessage message={touched.lastName && errors.lastName} />
              </div>
            </label>
          </div>
          <div className="labelContainer">
            <label className="form_labal">
              Email
              <Field name="email" type="text" />
              <div className="errorContainer">
                <ErrorMessage message={touched.email && errors.email} />
              </div>
            </label>
            <label className="form_labal">
              Phone
              <Field name="phone" type="text" />
              <div className="errorContainer">
                <ErrorMessage message={touched.phone && errors.phone} />
              </div>
            </label>
          </div>
          <div className="addressContainer">
            <label className="form_labal">
              Address
              <div className="addressFields">
                <Field name="address" type="text" style={{ width: "405px" }} />
                <div className="errorContainer">
                  <ErrorMessage message={touched.address && errors.address} />
                </div>
              </div>
            </label>
          </div>
          <button className="submit" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;