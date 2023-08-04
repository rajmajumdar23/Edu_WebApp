import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle, LoginSocialFacebook } from 'reactjs-social-login';

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleForgot = () => {
    navigate('/forgot');
  };

  const handleAccount = () => {
    navigate('/signup');
  };

  const handleLogin = (values) => {
    if (values.email === 'example@example.com' && values.password === 'password') {
      navigate('/home');
    } else {
      setError('Please use a proper username and password.');
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/,
        'Password must contain at least 6 alphabet characters, one symbol, one number, and one capital letter'
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
    <img src="/images/lgsng.jpg" style={{width:"95rem",marginLeft:"-10rem"}}/>
    <div className="label" style={{marginTop:"2rem",width: "95rem", padding: "1rem", background: "#408bff", color: "white", fontSize: "1.5rem", fontWeight: "600", marginLeft: "-10rem", marginBottom: "2rem" }}>
    Unlocking a World of Knowledge and Innovation! 🚀 Log in to The IT School and let the learning begin!
      </div>
      <label id="firstl">Login to your ITS account</label>
      <div className="LoginField">
        <div className="GoogleLogin">
          <LoginSocialGoogle
            client_id={"226532205027-2e0kanhchgtbv4dj4vf6546457emllpn.apps.googleusercontent.com"}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={({ provider, data }) => {
              console.log(provider, data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <GoogleLoginButton
              style={{
                height: '3rem',
                fontFamily: 'Raleway, sans-serif',
                boxShadow: '0rem',
                fontWeight: 'bold',
              }}
              className="fs-6 bg-white google-login-button"
              text="Continue with Google"
            />
          </LoginSocialGoogle>
        </div>
        <div className="FacebookLogin">
          <LoginSocialFacebook
            appId="160073703745032"
            onResolve={(response) => {
              console.log(response);
            }}
            onReject={(error) => {
              console.log(error);
            }}
          >
            <FacebookLoginButton
              style={{
                height: '3rem',
                fontFamily: 'Raleway, sans-serif',
                boxShadow: '0rem',
                color: '#3b5998',
                fontWeight: 'bold',
              }}
              className="fs-6 bg-white facebook-login-button"
              text="Continue with Facebook"
            />
          </LoginSocialFacebook>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            className="form-control"
            id="Input"
            aria-describedby="PasswordHelp"
            style={{ fontWeight: 'bold' }}
            placeholder="Email address or phone number"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <input
            type="password"
            className="form-control"
            id="Input"
            aria-describedby="PasswordHelp"
            style={{ fontWeight: 'bold' }}
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>
              {formik.errors.password}
              <div className="password-eligibility-message" style={{width:"30rem",marginLeft:"9.8rem",marginBottom:"1rem"}}>
                Password must contain at least 6 alphabet characters, one symbol, one number, and one capital letter
              </div>
            </div>
          ) : null}

          <button type="submit" id="LogB">
            Log in
          </button>
          {error && <div>{error}</div>}
        </form>

        <br />
        <label id="or">or</label>
        <button onClick={handleForgot} id="FP">
          Forgot password?
        </button>
        <br />
        <div className="linelog"></div>
        <label id="dhna">Don't have an account? </label>
        <button id="CreateAB" onClick={handleAccount}>
          Sign Up
        </button>
        <br />
      </div>
    </>
  );
};

export default LoginPage;
