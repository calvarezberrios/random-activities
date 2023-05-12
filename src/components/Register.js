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
import { registerUser } from "../actions/authActions";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
};

export default function Register() {
  const [credentials, setCredentials] = useState(initialState);
  const { isLoggedIn, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const register = async (e) => {
    e.preventDefault();
    dispatch(registerUser(credentials));
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
      <LoginForm onSubmit={register}>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <FormField
          id="firstName"
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={credentials.firstName}
          onChange={handleChange}
        />
        <FormLabel htmlFor="lastName">Last Name</FormLabel>
        <FormField
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={credentials.lastName}
          onChange={handleChange}
        />
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormField
          id="email"
          type="text"
          name="email"
          placeholder="Enter email"
          value={credentials.email}
          onChange={handleChange}
        />
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
        <LoginButton type="submit">Register</LoginButton>
        <Link className="registerLink" to="/login">
          Already have an account?
        </Link>
      </LoginForm>
    </LoginFormContainer>
  );
}
