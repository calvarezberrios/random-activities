import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  padding: 10px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const FilterSelect = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const Table = styled.table`
  flex: 1;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
  margin-right: 50px;

  th {
    background-color: #f2f2f2;
    color: #555;
    font-weight: bold;
    padding: 12px;
    text-align: left;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    &:hover {
      background-color: #f9f9f9;
    }
  }
`;

const TableRow = styled.tr`
  background-color: ${(props) => (props.active ? "#f9f9f9" : "inherit")};
`;

const Preview = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
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
  Wrapper,
  IntroText,
  Filters,
  FilterInput,
  FilterSelect,
  ContentWrapper,
  Table,
  TableRow,
  Preview,
  Button,
};
