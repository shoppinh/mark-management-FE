import React, { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
const CreateTransaction = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="container">
      <h1>Create transaction</h1>
      <p>Transfer some money to someone!</p>

      <br />

      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fromAddress">From address</label>
          <input
            type="text"
            className="form-control"
            id="fromAddress"
            aria-describedby="fromAddressHelp"
            disabled
          />
          <small id="fromAddressHelp" className="form-text text-muted">
            This is your wallet address. You cannot change it because you can
            only spend your own coins.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="toAddress">To address</label>
          <input
            type="text"
            className="form-control"
            id="toAddress"
            aria-describedby="toAddressHelp"
          />
          <small id="toAddressHelp" className="form-text text-muted">
            The address of the wallet where you want to send the money to. You
            can type random text here (if you are not interested in recovering
            the funds)
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            aria-describedby="amountHelp"
          />
          <small id="amountHelp" className="form-text text-muted">
            You can transfer any amount. Account balance is not checked in this
            demo. Have at it!
          </small>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign & create transaction
        </button>
      </form>
    </div>
  );
};

export default CreateTransaction;
