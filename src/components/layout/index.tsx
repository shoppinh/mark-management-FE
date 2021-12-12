import React from "react";
import { Outlet, Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          <img
            src="assets/img/logo-savjee.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          &nbsp;KienneikCoin
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
            <span className="badge badge-light"></span>
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

export default index;
