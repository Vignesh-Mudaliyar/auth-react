import React, { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../App";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/Input";
import CenteredContainer from "../components/centeredContainer";

export default function SignUp() {
  const history = useHistory();
  const { setAuthUser } = useContext(AuthContext);
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const handlePassword = (e) => {
    let value = e.target.value;
    setPassword(value);

    if (value.match(/[\w@$#*-]{8,15}/)) {
      setValidate({ ...validate, passwordText: "", passwordClass: "is-valid" });
    } else {
      setValidate({
        ...validate,
        passwordText: "Password must be atleast 8 characters long",
        passwordClass: "is-invalid",
      });
    }
  };

  const handleConfirmPassword = (e) => {
    let value = e.target.value;
    setConfirmPassword(value);

    if (value === password && value.length !==0) {
      setValidate({
        ...validate,
        confirmPasswordText: "",
        confirmPasswordClass: "is-valid",
      });
    } else {
      setValidate({
        ...validate,
        confirmPasswordText: "password not matched",
        confirmPasswordClass: "is-invalid",
      });
    }
  };

  useEffect(() => {
    if (
      validate.emailClass === "is-valid" &&
      validate.passwordClass === "is-valid" &&
      validate.confirmPasswordClass === "is-valid"
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [validate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthUser(true);
    history.push("/auth-react");
  };

  return (
    
    <CenteredContainer>
        <Form onSubmit={handleSubmit}>
          <h1 className="text-center">Sign up with Email</h1>

          <InputComponent
            label="Email"
            value={email}
            vClass={validate.emailClass}
            handleEvent={handleEmail}
            pHolder="Enter Email"
            errText={validate.emailText}
          />

          <InputComponent
            label="Password"
            value={password}
            vClass={validate.passwordClass}
            handleEvent={handlePassword}
            pHolder="Enter Passoord"
            errText={validate.passwordText}
            type={showPassword}
          />

          <InputComponent
            label="Confirm Password"
            value={confirmPassword}
            vClass={validate.confirmPasswordClass}
            handleEvent={handleConfirmPassword}
            pHolder="Enter Confirm Passoord"
            errText={validate.confirmPasswordText}
            type={showPassword}
          />

          <Form.Check type="checkbox" label="Show password" onChange={(e) => {
            if(showPassword === 'password'){
              setShowPassword('text');
            }
            else{
              setShowPassword('password');
            }
          }} />

          <ButtonComponent disable={disable} label="Sign up" type='submit'  />
        </Form>
        <div className="mt-3 text-center">
          Already have an account? <Link to="/auth-react/login">Login</Link>
        </div>
        </CenteredContainer>

  );
}
