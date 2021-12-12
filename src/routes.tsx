import MainLayout from "./components/layout/";
import { Navigate } from "react-router-dom";
import PendingTransactions from "./pages/PendingTransactions";
import CreateTransaction from "./pages/CreateTransaction";
import WalletBalance from "./pages/WalletBalance";
import BlockchainViewer from "./pages/BlockchainViewer";
const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "wallet/:address", element: <WalletBalance /> },
      { path: "new-transaction", element: <CreateTransaction /> },
      { path: "pending-transactions", element: <PendingTransactions /> },
      { path: "/", element: <BlockchainViewer /> },
    ],
  },
];

export default routes;
