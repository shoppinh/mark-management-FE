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
import { InputFormState } from "../pages/CreateTransaction";

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
  isMining: boolean;
}

const teacher: Teacher = {
  teacherID: 1,
  name: "nguyen van a",
  level: "aaa",
  department: "cntt",
  phone: "123",
};

const student: Student = {
  studentID: 1,
  name: "vu anh tu",
  dob: "aaa",
  phone: "123",
};

const course: Course = {
  name: "vat ly 1",
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
  isMining: false,
};
export const blockchainSlice = createSlice({
  name: "blockchain",
  initialState,
  reducers: {
    createTransaction: (state, action: PayloadAction<InputFormState>) => {
      const course: Course = {
        name: action.payload.courseName,
        semester: action.payload.semester,
        numberOfTC: action.payload.numberOfTC,
      };
      const student: Student = {
        studentID: action.payload.studentID,
        dob: action.payload.DOB,
        name: action.payload.studentName,
        phone: action.payload.studentPhone,
      };
      const teacher: Teacher = {
        teacherID: action.payload.teacherID,
        department: action.payload.department,
        name: action.payload.studentName,
        phone: action.payload.studentPhone,
        level: action.payload.level,
      };
      const data = new Data(
        teacher,
        student,
        course,
        action.payload.mark1,
        action.payload.mark2,
        action.payload.mark3
      );
      const tx = new Transaction(
        myWalletAddress,
        action.payload.toAddress,
        data
      );
      tx.signTransaction(myKey);
      state.blockchain.addTransaction(tx);
    },
    changeDifficulty: (state, action: PayloadAction<number>) => {
      state.blockchain.difficulty = action.payload;
    },
    mineBlock: (state) => {
      state.blockchain.minePendingTransactions(state.address);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createTransaction, mineBlock, changeDifficulty } =
  blockchainSlice.actions;

export default blockchainSlice.reducer;
