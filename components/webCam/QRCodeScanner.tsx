// components/QRCodeScanner.tsx
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

interface QRCodeScannerProps {
  onScan: (data: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan }) => {
  const [scannedData, setScannedData] = useState<string | null>(null);

  const handleScan = (data: string | null) => {
    if (data) {
      setScannedData(data);
      onScan(data);
    }
  };

  const handleError = (err: Error) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            handleScan(result?.getText() || "");
          }

          if (!!error) {
            handleError(error);
          }
        }}
        constraints={{
          facingMode: "environment",
          width: 1280,
          height: 720,
          //scanFrequency: 2,
        }}
        //style={{ width: "100%" }}
      />
      {scannedData && <p>QR Code Data: {scannedData}</p>}
    </div>
  );
};

export default QRCodeScanner;
