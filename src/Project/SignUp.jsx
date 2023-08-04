import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const navigate = useNavigate();
  const [isPasswordTouched, setPasswordTouched] = useState(false);

  const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    emailOrPhone: yup
      .string()
      .required('Email address or phone number is required')
      .email('Invalid email address'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
      ),
    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('password'), null], 'Passwords do not match'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailOrPhone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Your submit logic here
      console.log('Form submitted:', values);
      navigate('/login');
    },
  });

  const handlePasswordChange = (e) => {
    formik.handleChange(e);
    setPasswordTouched(true);
  };

  const getPasswordStrength = () => {
    const passwordLength = formik.values.password.length;
    if (passwordLength >= 8) {
      return 'Strong';
    } else if (passwordLength >= 6) {
      return 'Normal';
    } else {
      return 'Weak';
    }
  };

  const isSubmitDisabled =
    Object.keys(formik.errors).length > 0 ||
    !formik.dirty ||
    formik.isSubmitting ||
    formik.values.password !== formik.values.confirmPassword;

  return (
    <div className="signup-module">
      <img src="/images/lgsng.jpg" style={{width:"94.5rem",marginLeft:"-22.5rem"}}/>
    <div className="label" style={{marginTop:"2rem",width: "94.5rem", padding: "1rem", background: "#2a6acb", color: "white", fontSize: "1.5rem", fontWeight: "600", marginLeft: "-22.5rem", marginBottom: "2rem" }}>
    Unlocking a World of Knowledge and Innovation! 🚀 Log in to The IT School and let the learning begin!
      </div>
      <form onSubmit={formik.handleSubmit}>
        <label id="Firstline">Sign up and start learning</label>
        <input
          type="text"
          className="form-control"
          id="Input-Signup"
          aria-describedby="PasswordHelp"
          placeholder="First name"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && <p>{formik.errors.firstName}</p>}
        <input
          type="text"
          className="form-control"
          id="Input-Signup"
          aria-describedby="PasswordHelp"
          placeholder="Last name"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName && <p>{formik.errors.lastName}</p>}
        <input
          type="text"
          className="form-control"
          id="Input-Signup"
          aria-describedby="PasswordHelp"
          placeholder="Email address or phone number"
          name="emailOrPhone"
          value={formik.values.emailOrPhone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
          <p>{formik.errors.emailOrPhone}</p>
        )}
        <input
          type="password"
          className="form-control"
          id="Input-Signup"
          aria-describedby="PasswordHelp"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={handlePasswordChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
        <input
          type="password"
          className="form-control"
          id="ConfirmPassword"
          aria-describedby="PasswordHelp"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p>{formik.errors.confirmPassword}</p>
        )}
        <div className="password-strength" style={{marginLeft:"-14rem",padding:".5rem"}}>
          Password Strength:
          {isPasswordTouched && (
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color:
                  formik.values.password &&
                  (formik.errors.password
                    ? 'red'
                    : getPasswordStrength() === 'Strong'
                    ? 'green'
                    : getPasswordStrength() === 'Normal'
                    ? '#a2a24e'
                    : ''),
              }}
            >
              {getPasswordStrength()}
            </span>
          )}
        </div>
        <div className="containerterms text-center">
          <div className="row" style={{ position: 'relative' }}>
          </div>
        </div>
        <button type="submit" id="SignupB" disabled={isSubmitDisabled}>
          Signup
        </button>
      </form>
      <div className="linesign"></div>
      <label id="ahan">Already have an account?</label>
      <button onClick={() => navigate('/login')} id="Loginb">
        Log in
      </button>
      <br />
    </div>
  );
};

export default SignUp;
