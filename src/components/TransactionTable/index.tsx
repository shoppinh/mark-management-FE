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
          <th scope="col">StudentName</th>
          <th scope="col">TeacherName</th>
          <th scope="col">CourseName</th>
          <th scope="col">Mark1</th>
          <th scope="col">Mark2</th>
          <th scope="col">Mark3</th>
          <th scope="col">AvgMark</th>

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
              {tx.data.student.name}
            </td>
            <td className="text-truncate" style={{ maxWidth: "100px" }}>
              {tx.data.teacher.name}
            </td>
            <td className="text-truncate" style={{ maxWidth: "100px" }}>
              {tx.data.course.name}
            </td>
            <td className="text-truncate" style={{ maxWidth: "100px" }}>
              Mark 1: {tx.data.mark1}
            </td>
            <td className="text-truncate" style={{ maxWidth: "100px" }}>
              Mark 2: {tx.data.mark2}
            </td>
            <td className="text-truncate" style={{ maxWidth: "100px" }}>
              Mark 3: {tx.data.mark3}
            </td>
            <td className="text-truncate" style={{ maxWidth: "100px" }}>
              AvgMark : {tx.data.agvMark}
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
