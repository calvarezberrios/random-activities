import styled from "styled-components";

const Heading = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const IntroText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f9f9f9;
`;

const TableHead = styled.thead`
  background-color: #ccc;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: bold;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f1f1f1;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

const FilterDropdown = styled.select`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const FilterInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ActivityTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const ActivityDetail = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

export {
  Heading,
  IntroText,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  FilterContainer,
  FilterLabel,
  FilterDropdown,
  FilterInput,
  ActivityList,
  ActivityListItem,
  ActivityTitle,
  ActivityDetail,
};
