import React, { useState, useEffect, useContext } from "react";
import {  Form, Alert } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../App";
import ButtonComponent from "../components/ButtonComponent";
import CenteredContainer from "../components/centeredContainer";
import InputComponent from "../components/Input";

export default function Login() {
  const { setAuthUser } = useContext(AuthContext);

  const history = useHistory();
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

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
      setValidate({ ...validate, emailText: "", emailClass: "" });
    } else {
      setValidate({
        ...validate,
        emailText: "Please enter valid email",
        emailClass: "is-invalid",
      });
    }
  };

  const handlePassword = (e) => {
    let value = e.target.value;
    setPassword(value);
    setErr(false);
  };

  useEffect(() => {
    if (validate.emailClass === "" && password.length >= 1) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [validate, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "vignesh@info.com" && password === "vignesh012") {
      setErr(false);
      setAuthUser(true);
      history.push("/auth-react");
    } else {
      setErr(true);
      setDisable(true);
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
            type="password"
          />

          <ButtonComponent disable={disable} type="submit" label="Login" />
        </Form>
        <div className="mt-3 text-center">
          Didn't have an account? <Link to="/auth-react/pdetails">Sign up</Link>
        </div>
        <div className="mt-3">
 HINT:- email:- <b>vignesh@info.com</b> || pwd:- <b>vignesh012</b>
     </div>
    </CenteredContainer>
    
     </>
  );
}
