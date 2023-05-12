import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
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

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;

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

export {
  Wrapper,
  Title,
  Filters,
  FilterInput,
  FilterSelect,
  Table,
  TableRow,
  Preview,
};
