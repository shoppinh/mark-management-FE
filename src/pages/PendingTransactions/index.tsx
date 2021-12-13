import React from "react";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { mineBlock } from "../../app/blockchainSlice";
import TransactionTable from "../../components/TransactionTable";
const PendingTransactions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blockchain, address } = useSelector(
    (state: RootState) => state.blockchain
  );
  const handleMine = () => {
    dispatch(mineBlock());
    navigate("/");
  };
  return (
    <div className="container">
      <h1>Pending transactions</h1>
      <p>
        These transactions are waiting to be included in the next block. Next
        block is created when you start the mining process.
      </p>

      {blockchain.pendingTransactions.length > 0 && (
        <div>
          <TransactionTable
            transactions={blockchain.pendingTransactions}
            address={address}
          />
          <button className="btn btn-primary" onClick={handleMine}>
            Start mining
          </button>
        </div>
      )}

      {/* {miningInProgress === true && <div >
    	Mining block.. Hang on...
    </div>} */}
    </div>
  );
};

export default PendingTransactions;
