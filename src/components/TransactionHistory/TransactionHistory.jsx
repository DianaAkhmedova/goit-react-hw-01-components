import PropTypes from 'prop-types';
import {
  Table,
  TableHeadRow,
  TableDescr,
  TableData,
  TableBodyRow,
} from './transactionHistory.styled';

const TransactionHistory = ({ items }) => {
  const tableRowData = items.map(({ id, type, amount, currency }) => (
    <TableBodyRow key={id}>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableBodyRow>
  ));

  return (
    <Table>
      <thead>
        <TableHeadRow>
          <TableDescr>Type</TableDescr>
          <TableDescr>Amount</TableDescr>
          <TableDescr>Currency</TableDescr>
        </TableHeadRow>
      </thead>

      <tbody>{tableRowData}</tbody>
    </Table>
  );
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
        .isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
