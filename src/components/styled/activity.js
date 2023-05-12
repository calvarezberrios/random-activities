import styled from "styled-components";

const CardContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  padding-top: 60px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 400px;
  padding: 0 20px;
  background-color: #f9c74f;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin: 10px;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const CardDetail = styled.p`
  margin: 10px 0;
  font-size: 20px;
  align-self: flex-start;
`;

const CardLink = styled.a`
  color: #4caf50;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ActionIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 7px;
  font-size: 1.3rem;
  cursor: pointer;
  border-radius: 100%;

  &:hover {
    background-color: rgba(204, 204, 204, 0.5);
    background-opacity: 1;
    color: #444;
  }
`;

const ActivityButton = styled.button`
  position: absolute;
  top: 0;
  background-color: #4caf50;
  border: none;
  color: white;
  margin: 10px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3e8e41;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #2d702b;
    transform: translateY(1px);
  }
`;

export {
  CardContainer,
  Card,
  CardTitle,
  CardDetail,
  CardLink,
  ActionIcon,
  ActivityButton,
};
