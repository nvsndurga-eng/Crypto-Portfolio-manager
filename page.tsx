"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [prices, setPrices] = useState<any>(null);

  useEffect(() => {
    fetch("/api/prices")
      .then(res => res.json())
      .then(data => setPrices(data));
  }, []);

  if (!prices) return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Crypto Portfolio</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl">Bitcoin</h2>
          <p className="text-2xl">${prices.bitcoin.usd}</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl">Ethereum</h2>
          <p className="text-2xl">${prices.ethereum.usd}</p>
        </div>
      </div>
    </div>
  );
}