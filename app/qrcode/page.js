'use client';
import QRCodeScanner from '@/components/webCam/QRCodeScanner';
import React, { useState } from 'react';
const Page = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleScan = async (blob) => {
    const formData = new FormData();
    formData.append('image1', blob, 'qrcode.jpg');

    setError(null);
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/compare1', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setResult(responseData);
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données:', error);
      setError('Erreur lors de l\'envoi des données. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>QR Code Scanner and Comparison</h1>
      <QRCodeScanner onScan={handleScan} />
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div>
          <h2>Résultat de la comparaison</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Page;