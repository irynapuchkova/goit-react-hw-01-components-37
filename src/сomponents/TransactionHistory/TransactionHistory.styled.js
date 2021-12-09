import styled from '@emotion/styled';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;

  border-collapse: collapse;
`;
export const TableHead = styled.thead`
  background-color: turquoise;
`;
export const Row = styled.tr`
  &:nth-of-type(2n) {
    background-color: rgb(190, 240, 223);
  }
`;
export const HeadItem = styled.th`
  padding: 10px;
  border: 1px solid #2a2a2a;
  background-color: turquoise;
`;
export const Body = styled.tbody``;
export const Data = styled.td`
  padding: 10px;
  border: 1px solid #2a2a2a;
`;
