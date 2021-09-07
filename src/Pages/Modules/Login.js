import React, { useState, useEffect, useContext } from "react";
import {  Form, Alert } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../App";
import ButtonComponent from "../../components/ButtonComponent";
import CenteredContainer from "../../components/centeredContainer";
import InputComponent from "../../components/Input";
import Cookies from 'js-cookie'; 

export default function Login() {
  const { setAuthUser } = useContext(AuthContext);
  // 150818471471-jo1r14g95ls5frtno0g50uua9msu2io3.apps.googleusercontent.com
  const history = useHistory();
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [showPassword,setShowPassword] = useState('password');
  const [validate, setValidate] = useState({
    emailClass: "",
    emailText: "",
    passwordText: "",
    passwordClass: "",
    confirmPasswordText: "",
    confirmPasswordClass: "",
  });

  const handleEmail = (e) => {
    let value = e.target.value;
    setErr(false);
    setEmail(value);

    if (value.match(/^[a-z0-9-]+@[a-z-]+\.[a-z]{2,5}$/)) {
      setValidate({ ...validate, emailText: "", emailClass: "is-valid" });
    } else {
      setValidate({
        ...validate,
        emailText: "Please enter valid email",
        emailClass: "is-invalid",
      });
    }
  };

 const handleShowPwd =  (e) => {
    if(showPassword === 'password'){
      setShowPassword('text');
    }
    else{
      setShowPassword('password');
    }
  }

  const handlePassword = (e) => {
    let value = e.target.value;
    setPassword(value);
    setErr(false);
  };

  useEffect(() => {
    (validate.emailClass === "is-valid" && password.length >= 1) ? setDisable(false) :  setDisable(true);
    
  }, [validate, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "test@abc.com" && password === "12345678") {
      setErr(false);
      setAuthUser(true);
  
      Cookies.set('login','true');

      history.push("/");
    } else {
      setErr(true);
      (validate.emailClass === "is-valid" && password.length >= 1) ? setDisable(false) :  setDisable(true);
    }
  };

  return (
      <>
    <CenteredContainer>
    
        <Form onSubmit={handleSubmit}>
          <h1 className="text-center">Login</h1>
          {err && <Alert variant="danger">Email or Password is wrong</Alert>}

          <InputComponent
            label="Email"
            value={email}
            vClass={validate.emailClass}
            handleEvent={handleEmail}
            pHolder="Enter email"
            errText={validate.emailText}
          />
          <InputComponent
            label="Password"
            value={password}
            vClass={validate.passwordClass}
            handleEvent={handlePassword}
            pHolder="Enter Password"
            errText={validate.passwordText}
            type={showPassword}
          />

          <Form.Check type="checkbox" label="Show password" onChange={handleShowPwd} />

          <ButtonComponent disable={disable} type="submit" label="Login" />
        </Form>
        <div className="mt-3 text-center">
          Didn't have an account? <Link to="/signup">Sign up</Link>
        </div>
        <div className="mt-3">
      HINT:- email:- <b>test@abc.com</b> || pwd:- <b>12345678</b>
     </div>
    </CenteredContainer>
    
     </>
  );
}
