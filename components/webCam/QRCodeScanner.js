// components/QRCodeScanner.js
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import '../../app/scan.css'; // Importez le fichier CSS pour les styles

const QRCodeScanner = ({ onScan }) => {
  const webcamRef = useRef(null);
  const [scannedData, setScannedData] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const capture = () => {
      if (webcamRef.current && webcamRef.current.video.readyState === 4) {
        const video = webcamRef.current.video;
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (context) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);

          if (code) {
            setScannedData(code.data);
            setIsScanning(true); // Activer l'état de scan pour déclencher l'animation CSS
            // Convert canvas to blob
            canvas.toBlob((blob) => {
              onScan(blob);
            }, 'image/jpeg');
          } else {
            setIsScanning(false); // Désactiver l'état de scan si aucun code n'est détecté
          }
        }
      }
    };

    const interval = setInterval(capture, 500);
    return () => clearInterval(interval);
  }, [onScan]);

  return (
    <div className="qrcode-scanner">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{ width: '50%', height: '50%' }}
      />
      {scannedData && <p>QR Code Data: {scannedData}</p>}
      {isScanning && <div className="scan-effect"></div>} {/* Élément pour l'effet de scan */}
    </div>
  );
};

export default QRCodeScanner;