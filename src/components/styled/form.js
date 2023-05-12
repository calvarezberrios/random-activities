import styled from "styled-components";

const LoginFormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 300px;

  & > a {
    font-size: 0.8rem;
  }
`;

const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const FormField = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export { LoginFormContainer, LoginForm, FormLabel, FormField, LoginButton };
