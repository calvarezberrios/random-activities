import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  cursor: pointer;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    margin-left: 15px;
    text-align: center;

    &:hover {
      color: #999;
    }
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #1a73e8;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
`;

const ErrorWrapper = styled.div`
  background-color: #ffdddd;
  color: #ff0000;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const Footer = styled.footer`
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
`;

export { Container, Header, Title, NavLinks, Spinner, ErrorWrapper, Footer };
