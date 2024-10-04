import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css"; // Required for wallet button functionality

export const AppBar: FC = () => {
  return (
    <div>
      <WalletMultiButton
        style={{
          padding: "0.75rem 1.5rem",
          border: "2px solid #fbbf24",
          backgroundColor: "transparent",
          color: "#fbbf24",
          fontWeight: "bold",
          borderRadius: "9999px",
          transition: "all 0.3s ease",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
};
