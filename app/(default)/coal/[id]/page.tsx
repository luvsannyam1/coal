"use client";
import { useState } from "react";

const contracts = [
  {
    id: 1,
    title: "Халзан бүрэгтэйн орд",
    description: "A rare earth minerals extraction site with diverse elements.",
    details:
      "This site is licensed under MV-006911 and owned by Монголиан нэшнл рийр ийрт корп. It features significant deposits of Neodymium, Praseodymium, Dysprosium, and Terbium.",
    startingPrice: 50000,
    elements: [
      {
        elementName: "Neodymium",
        capacity: "278,500kg",
      },
      {
        elementName: "Praseodymium",
        capacity: "82,300kg",
      },
      {
        elementName: "Dysprosium",
        capacity: "13,750kg",
      },
      {
        elementName: "Terbium",
        capacity: "1,520kg",
      },
    ],
    location: {
      longitude: 91.5654,
      latitude: 48.5012,
    },
  },
  {
    id: 2,
    title: "Шивээ-Овоо орд",
    description: "A coal mining site with extensive reserves.",
    details:
      "This site is licensed under MV-009876 and owned by Шивээ-Овоо ХХК. It is known for its high-quality coal deposits and efficient extraction processes.",
    startingPrice: 30000,
    elements: [
      {
        elementName: "Coal",
        capacity: "500,000kg",
      },
    ],
    location: {
      longitude: 108.7611,
      latitude: 44.3857,
    },
  },
  {
    id: 3,
    title: "Таван толгойн орд",
    description: "One of the largest coking coal deposits in the region.",
    details:
      "This site is licensed under MV-004321 and owned by Энержи Ресурс ХХК. It supplies premium-grade coking coal to various industries.",
    startingPrice: 75000,
    elements: [
      {
        elementName: "Coking Coal",
        capacity: "1,200,000kg",
      },
    ],
    location: {
      longitude: 106.0884,
      latitude: 43.5981,
    },
  },
];

export default function CoalDetails() {
  const [selectedContract, setSelectedContract] = useState(contracts[0]);
  const [currentBid, setCurrentBid] = useState(selectedContract.startingPrice);
  const [bidInput, setBidInput] = useState("");

  const handleContractSelect = (contract: typeof contracts[0]) => {
    setSelectedContract(contract);
    setCurrentBid(contract.startingPrice);
    setBidInput("");
  };

  const handleBidSubmit = () => {
    const bidAmount = parseFloat(bidInput);
    if (isNaN(bidAmount) || bidAmount <= currentBid) {
      alert("Please enter a valid bid higher than the current bid.");
    } else {
      setCurrentBid(bidAmount);
      alert(`Your bid of $${bidAmount.toLocaleString()} has been placed!`);
      setBidInput("");
    }
  };

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">
            Available Contracts
          </h2>
          {contracts.map((contract) => (
            <div
              key={contract.id}
              className={`cursor-pointer mb-4 p-4 rounded-2xl border transition-transform transform hover:scale-105 ${
                selectedContract.id === contract.id
                  ? "border-amber-500 bg-gray-800"
                  : "border-gray-700 bg-gray-900"
              }`}
              onClick={() => handleContractSelect(contract)}
            >
              <h3 className="text-xl font-semibold text-gray-200">
                {contract.title}
              </h3>
              <p className="text-amber-200/65">{contract.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">
            Contract Details
          </h2>
          <div className="p-8 rounded-3xl border border-amber-500 bg-gray-800 shadow-lg">
            <h3 className="text-3xl font-semibold text-amber-500 mb-6">
              {selectedContract.title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {selectedContract.details}
            </p>

            <h4 className="text-2xl font-semibold text-gray-200 mb-2">
              Starting Price:{" "}
              <span className="text-amber-400">
                ${selectedContract.startingPrice.toLocaleString()}
              </span>
            </h4>

            <h4 className="text-xl text-gray-300 mb-4">
              Current Bid:{" "}
              <span className="text-green-400">
                ${currentBid.toLocaleString()}
              </span>
            </h4>

            <div className="mb-6">
              <input
                type="number"
                placeholder="Enter your bid"
                value={bidInput}
                onChange={(e) => setBidInput(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-700 bg-gray-900 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 mb-3"
              />
              <button
                onClick={handleBidSubmit}
                className="w-full py-3 px-6 bg-amber-500 text-gray-900 font-semibold rounded-xl hover:bg-amber-600 transition"
              >
                Place Bid
              </button>
            </div>

            <h4 className="text-2xl font-semibold text-gray-200 mb-4">
              Element Capacities
            </h4>
            <ul className="space-y-3 mb-6">
              {selectedContract.elements.map((element, index) => (
                <li
                  key={index}
                  className="flex justify-between p-3 bg-gray-900 rounded-xl border border-gray-700"
                >
                  <span className="text-amber-400">{element.elementName}</span>
                  <span className="text-gray-300">{element.capacity}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl overflow-hidden border border-gray-700">
              <iframe
                src={`https://www.google.com/maps?q=${selectedContract.location.latitude},${selectedContract.location.longitude}&hl=es;z=14&output=embed`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
