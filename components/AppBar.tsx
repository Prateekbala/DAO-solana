import { FC } from "react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";

export const AppBar: FC = () => {
  return (
    <div>
      <WalletMultiButton />
    </div>
  );
};
