import React from "react";
import { Outlet, Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
const Layout = () => {
  const { blockchain } = useSelector((state: RootState) => state.blockchain);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          MarkManagement
        </Link>

        <div>
          {/* *ngIf="thereArePendingTransactions()" */}
          <button className="btn btn-outline-light">
            <Link
              to="/pending-transactions"
              style={{ color: "red", textDecoration: "none" }}
            >
              Pending transactions
            </Link>
          </button>
          &nbsp;
          <button className="btn btn-outline-light">
            <Link
              to="/new-transaction"
              style={{ color: "red", textDecoration: "none" }}
            >
              Create transaction
            </Link>
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
