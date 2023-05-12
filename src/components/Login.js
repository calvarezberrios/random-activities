import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  FormField,
  FormLabel,
  LoginButton,
  LoginForm,
  LoginFormContainer,
} from "./styled/form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/authActions";

const initialState = { username: "", password: "" };

export default function Login() {
  const [credentials, setCredentials] = useState(initialState);
  const { isLoggedIn, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  if (isLoggedIn) return <Navigate to="/saved-activities" />;

  return (
    <LoginFormContainer>
      <LoginForm onSubmit={login}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <FormField
          id="username"
          type="text"
          name="username"
          placeholder="Enter username"
          value={credentials.username}
          onChange={handleChange}
        />

        <FormLabel htmlFor="password">Password</FormLabel>
        <FormField
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={credentials.password}
          onChange={handleChange}
        />
        <LoginButton type="submit">Log in</LoginButton>
        <Link className="registerLink" to="#">
          Don't have an account?
        </Link>
      </LoginForm>
    </LoginFormContainer>
  );
}
