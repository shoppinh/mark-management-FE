import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Blockchain,
  Course,
  Data,
  Student,
  Teacher,
  Transaction,
  Block,
} from "./blockchain";
import { ec as EC } from "elliptic";

const ec = new EC("secp256k1");
const myKey = ec.keyFromPrivate(
  "8653fed90f1dd4c7ea436f20038278e4b5f96bce7947d58d7b5e7ecfe7ea3a1b"
);
// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic("hex");
const ql = new Blockchain();

export interface BlockchainState {
  blockchain: Blockchain;
  address: string;
}

const teacher: Teacher = {
  teacherID: 1,
  name: "tu",
  level: "aaa",
  department: "cntt",
  phone: "123",
};

const student: Student = {
  studentID: 1,
  name: "tu hoc sinh",
  dob: "aaa",
  phone: "123",
};

const course: Course = {
  name: "string",
  semester: "ki 1 2021",
  numberOfTC: 2,
};

const data = new Data(teacher, student, course, 10, 10, 9);
//functions

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, "diachihstu", data);
tx1.signTransaction(myKey);
ql.addTransaction(tx1);

// Mine block
ql.minePendingTransactions(myWalletAddress);

// Create a transaction & sign it with your key
const tx2 = new Transaction(myWalletAddress, "diachihstu", data);
tx2.signTransaction(myKey);
ql.addTransaction(tx2);

// Mine block
ql.minePendingTransactions(myWalletAddress);
const initialState: BlockchainState = {
  blockchain: ql,
  address: myWalletAddress,
};
export const blockchainSlice = createSlice({
  name: "blockchain",
  initialState,
  reducers: {
    increment: (state) => {},

    incrementByAmount: (state, action: PayloadAction<number>) => {},
    createTransaction: (state, action: PayloadAction<Block>) => {
      state.blockchain.chain.push(action.payload);
    },
    changeDifficulty: (state, action: PayloadAction<number>) => {
      state.blockchain.difficulty = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, incrementByAmount } = blockchainSlice.actions;

export default blockchainSlice.reducer;
