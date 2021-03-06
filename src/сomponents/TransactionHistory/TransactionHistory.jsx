import PropTypes, { shape } from 'prop-types';
import {
  Table,
  TableHead,
  Row,
  HeadItem,
  Body,
  Data,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <Row>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </Row>
      </TableHead>

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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
