import React from "react";
import BlockView from "../../components/BlockView";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import TransactionTable from "../../components/TransactionTable";

const BlockchainViewer = () => {
  const { address, blockchain } = useSelector(
    (state: RootState) => state.blockchain
  );
  const [blockSelected, setBlockSelected] = React.useState<number>(0);

  const handleSelectBlock = (index: number) => {
    setBlockSelected(index);
  };
  return (
    <>
      <div className="container">
        <h1>Blocks on chain</h1>
        <p>
          Each card represents a block on the chain. Click on a block to see the
          transactions stored inside.
        </p>
      </div>
      <div className="container">
        {blockchain.chain.map((block, index) => (
          <BlockView
            block={block}
            key={index}
            index={index}
            selectBlock={handleSelectBlock}
            isSelected={index === blockSelected ? true : false}
          />
        ))}
      </div>

      <div className="container">
        <h1>
          Transactions inside{" "}
          {blockSelected === 0 ? "Genesis Block" : `Block ${blockSelected}`}
        </h1>
        <TransactionTable
          transactions={blockchain.chain[blockSelected].transactions}
          address={address}
        />
      </div>
    </>
  );
};

export default BlockchainViewer;
