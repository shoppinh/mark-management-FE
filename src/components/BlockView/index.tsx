import React from "react";
import { Block } from "../../app/blockchain";
import "./style.css";
export interface BlockViewProps {
  block: Block;
  index: number;
  selectBlock: (index: number) => void;
  isSelected: boolean;
}
const BlockView: React.FC<BlockViewProps> = ({
  block,
  index,
  selectBlock,
  isSelected,
}) => {
  return (
    <div
      className={isSelected ? "card showBorder" : "card"}
      onClick={() => selectBlock(index)}
    >
      <div className="card-body">
        <h5 className="card-title">
          {block.previousHash === "0" ? "Genesis block" : `Block ${index}`}
        </h5>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="">Hash</span>
          <br />
          <div
            className="text-truncate"
            style={{ color: `#${block.hash.substring(0, 6)}` }}
          >
            <small>{block.hash ? block.hash : "Nothing"}</small>
          </div>

          <br />
          <span className="">Hash of previous block</span>
          <br />

          <div
            className="text-truncate"
            style={{ color: `#${block.previousHash.substring(0, 6)}` }}
          >
            <small>{block.previousHash ? block.previousHash : "Nothing"}</small>
          </div>
        </li>

        <li className="list-group-item">
          <span className="">Nonce</span>
          <br />
          <div className="text-truncate text-muted">
            <small>{block.nonce}</small>
          </div>
        </li>

        <li className="list-group-item">
          <span className="">Timestamp</span>
          <br />
          <div className="text-truncate text-muted">
            <small>{block.timestamp}</small>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BlockView;
