"use client";
import { useState } from "react";

const contracts = [
  {
    id: 1,
    title: "Annual Coal Supply Contract",
    description: "A long-term agreement for steady coal supply.",
    details:
      "This contract ensures a consistent coal supply for one year with fixed pricing and priority shipping.",
  },
  {
    id: 2,
    title: "Spot Purchase Agreement",
    description: "One-time purchase contract for immediate needs.",
    details:
      "This contract allows for a single purchase of coal, ideal for sudden or short-term requirements.",
  },
  {
    id: 3,
    title: "Flexible Delivery Contract",
    description: "Customized delivery schedules and quantities.",
    details:
      "This contract offers flexibility in both delivery schedules and quantities, suitable for fluctuating demand.",
  },
];

export default function LicensePage() {
  const [selectedContract, setSelectedContract] = useState(contracts[0]);

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Available Contracts */}
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
              onClick={() => setSelectedContract(contract)}
            >
              <h3 className="text-xl font-semibold text-gray-200">
                {contract.title}
              </h3>
              <p className="text-amber-200/65">{contract.description}</p>
            </div>
          ))}
        </div>

        {/* Contract Details */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">
            Contract Details
          </h2>
          <div className="p-8 rounded-3xl border border-amber-500 bg-gray-800 shadow-lg">
            <h3 className="text-3xl font-semibold text-amber-500 mb-6">
              {selectedContract.title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {selectedContract.details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
