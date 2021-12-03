import {
  Table,
  Head,
  Row,
  HeadItem,
  Body,
  Data,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Head>
        <Row>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </Row>
      </Head>

      <Body>
        {items.map(item => (
          <Row key={item.id}>
            <Data>{item.type}</Data>
            <Data>{item.amount}</Data>
            <Data>{item.currency}</Data>
          </Row>
        ))}
      </Body>
    </Table>
  );
}

// export const Table = styled.table`
//   margin-left: auto;
//   margin-right: auto;

//   border-collapse: collapse;
// `;
// export const Head = styled.thead`
//   background-color: turquoise;
// `;
// export const Row = styled.tr``;
// export const HeadItem = styled.th`
//   padding: 10px;
//   border: 1px solid #2a2a2a;
// `;
// export const Body = styled.body``;
// export const BodyRow = styled.tr`
//   &:nth-child(2n) {
//     background-color: rgb(190, 240, 223);
//   }
// `;
// export const Data = styled.td`
//   padding: 10px;
//   border: 1px solid #2a2a2a;
// `;
