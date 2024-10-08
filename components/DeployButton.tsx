import { FC, useCallback, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Transaction,
  SystemProgram,
  Keypair,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";

// Main Deploy Button Component
export const DeployButton: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [isDeploying, setIsDeploying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);

  const handleDeploy = useCallback(async () => {
    if (!publicKey) {
      setError("Please connect your wallet first");
      return;
    }

    try {
      setIsDeploying(true);
      setError(null);

      // Create a new keypair for the contract (program) deployment
      const programKeypair = Keypair.generate();

      // Create a new transaction
      const transaction = new Transaction();

      // Add deployment instructions here (e.g., SystemProgram.createAccount)
      transaction.add(
        SystemProgram.createAccount({
          fromPubkey: publicKey,
          newAccountPubkey: programKeypair.publicKey,
          lamports: await connection.getMinimumBalanceForRentExemption(0), // Adjust the size based on your program
          space: 0, // Size of the program data
          programId: programKeypair.publicKey, // Replace with the actual program ID if needed
        })
      );

      // Get the latest blockhash
      const latestBlockhash = await connection.getLatestBlockhash();
      transaction.recentBlockhash = latestBlockhash.blockhash;
      transaction.feePayer = publicKey;

      // Sign the transaction with the wallet
      transaction.sign(programKeypair);

      // Send the transaction
      const signature = await sendTransaction(transaction, connection);

      // Wait for confirmation
      const confirmation = await connection.confirmTransaction({
        signature,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
      });

      if (confirmation.value.err) {
        throw new Error("Transaction failed");
      }

      console.log("Deploy successful! Signature:", signature);
      setSignature(signature); // Store the signature
    } catch (err: any) {
      console.error("Deploy failed:", err);
      setError(err.message || "Deployment failed");
    } finally {
      setIsDeploying(false);
    }
  }, [publicKey, connection, sendTransaction]);

  const handleCopy = () => {
    if (signature) {
      navigator.clipboard.writeText(signature).then(() => {
        alert("Signature copied to clipboard!"); // Optional: show a confirmation alert
      });
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      {!publicKey ? (
        <Alert>
          <AlertDescription>
            Please connect your wallet using the button above
          </AlertDescription>
        </Alert>
      ) : (
        <>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            onClick={handleDeploy}
            disabled={isDeploying || !!signature}
            className="min-w-[200px]"
          >
            {isDeploying ? (
              <span className="flex items-center space-x-2">
                <span className="animate-spin">⚡</span>
                <span>Deploying...</span>
              </span>
            ) : signature ? (
              "Contract Deployed"
            ) : (
              "Deploy Contract"
            )}
          </Button>

          <div className="text-sm text-gray-500">
            Connected: {publicKey.toString().slice(0, 4)}...
            {publicKey.toString().slice(-4)}
          </div>

          {signature && (
            <div className="mt-4 flex flex-col items-center">
              <p className="text-sm text-gray-700">Deployment Signature:</p>
              <div className="flex items-center space-x-2">
                <span className="bg-gray-200 rounded-md p-2">{signature}</span>
                <Button onClick={handleCopy} className="min-w-[100px]">
                  Copy Signature
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
