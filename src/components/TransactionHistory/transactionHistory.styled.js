import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto 40px;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid #4169e1;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const TableHeadRow = styled.tr`
  background-color: #4169e1;
`;

export const TableDescr = styled.th`
  padding: 10px;
  width: 200px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: center;
`;

export const TableBodyRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f0f8ff;
  }

  &:nth-child(even) {
    background-color: #b0c4de;
  }
`;
