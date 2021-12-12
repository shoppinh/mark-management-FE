import React from "react";
import { Transaction } from "../../app/blockchain";
export interface TransactionTableProps {
  transactions: Transaction[];
  address: string;
}
const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  address,
}) => {
  return transactions.length > 0 ? (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Amount</th>
          <th scope="col">Timestamp</th>
          <th scope="col">Valid?</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td className="text-truncate" style={{ maxWidth: "100px" }}>
              <a>{tx.fromAddress}</a>

              {tx.fromAddress === null && <span>System</span>}
              {address === tx.fromAddress && (
                <span className="text-muted">
                  <br />
                  <small>(That's yours!)</small>
                </span>
              )}
            </td>
            <td className="text-truncate" style={{ maxWidth: "100px" }}>
              <a>{tx.toAddress}</a>
              {address === tx.toAddress && (
                <span className="text-muted">
                  <br />
                  <small>(That's yours!)</small>
                </span>
              )}
            </td>
            <td className="text-truncate" style={{ maxWidth: "100px" }}>
              Mark 1: {tx.data.mark1}
            </td>
            <td>Mark 2: {tx.data.mark2}</td>
            <td>Mark 3: {tx.data.mark3}</td>
            <td>AvgMark : {tx.data.agvMark}</td>
            <td>
              {tx.timestamp}
              <br />
              <span className="text-muted">
                <small>{tx.timestamp}</small>
              </span>
            </td>
            <td style={{ maxWidth: "40px" }}>
              {tx.isValid() ? <span>✓</span> : <span>✗</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>This block has no transactions</p>
  );
};

export default TransactionTable;
