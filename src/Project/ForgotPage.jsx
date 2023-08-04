import React from 'react'
import { useNavigate } from 'react-router';

const ForgotPage = () => {

  const lognavigate = useNavigate();
  const handlelog = () => {
    lognavigate("/login")
  }
  return (
    <div>
    <img src="/images/forgot.jpg" style={{width:"94.5rem",marginLeft:"-9.5rem"}}/>
    <div className="label" style={{width: "94.5rem", padding: "1rem", background: "#7F1ED5", color: "white", fontSize: "1.5rem", fontWeight: "600", marginLeft: "-9.5rem", marginBottom: "2rem" }}>
    Unlocking a World of Knowledge and Innovation! 🚀 Log in to The IT School and let the learning begin!
      </div>
      <label id='headingForgotpage'>Forgot Password</label>
      <input type="text" className="form-control" id="Inputfield-fotgot" aria-describedby="PasswordHelp" placeholder="Email address or phone number" />
      <button id='ResetForgot-btn'>Reset password</button><br />
      <lable id="orFp">or</lable> 
      <button onClick={handlelog} id="LoginForgot-btn">Log in</button>
    </div>
  )
}

export default ForgotPage