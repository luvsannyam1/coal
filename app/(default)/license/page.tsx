"use client";
import { useState } from "react";
import Image from "next/image";
import { contracts } from "@/components/data/data";

import Logo from "@/public/images/OIP.jpg";
import VIP from "@/public/images/crown.png";

export default function LicensePage() {
  const [selectedContract, setSelectedContract] = useState(contracts[0]);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  // Mock evaluation data
  const evaluations = [
    {
      id: 1,
      reviewer: "Big Bag Mo LLC",
      comments:
        "This project exceeded our expectations in multiple facets. The team's dedication and attention to detail were evident throughout the process. The strategic location and rich coal reserves were utilized to their fullest potential, ensuring not only profitability but also sustainability. The incorporation of advanced technologies significantly streamlined operations, leading to higher efficiency and reduced environmental impact. Moreover, the project fostered strong community relationships, contributing to local economic growth and job creation.",
      rating: 4.5,
      date: "2024-02-01",
    },
  ];

  // Update contract selection
  const handleContractSelect = (contract: (typeof contracts)[0]) => {
    setSelectedContract(contract);
  };

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
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
                  ? "border-amber-500 bg-gray-800 shadow-lg"
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

        {/* Contract Details */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">
            Synopsis
          </h2>
          <div className="p-8 rounded-3xl border border-amber-500 bg-gray-800 shadow-lg mb-8">
            <h3 className="text-3xl font-semibold text-amber-500 mb-6">
              {selectedContract.title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {selectedContract.details}
            </p>
            {isDetailsVisible && (
              <>
                <p className="text-lg text-gray-400 leading-relaxed mb-4">
                  This project aims to leverage the strategic location and rich
                  coal reserves to establish a sustainable and profitable mining
                  operation. Emphasis is placed on minimizing environmental
                  impact while maximizing economic returns. Advanced mining
                  techniques and state-of-the-art equipment will be employed to
                  ensure efficient extraction processes.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed mb-4">
                  Key partnerships with local stakeholders and government bodies
                  will facilitate smooth project execution and compliance with
                  regulatory standards. A comprehensive risk management plan
                  will be in place to address potential challenges and ensure
                  the safety of all personnel involved.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  The long-term vision includes expanding the project scope to
                  explore additional mineral resources in the region,
                  contributing to the overall economic development of the area
                  and creating more job opportunities for the local population.
                </p>
              </>
            )}
            <button
              onClick={() => setIsDetailsVisible(!isDetailsVisible)}
              className="mt-4 px-4 py-2 bg-amber-500 text-gray-900 rounded-xl font-semibold shadow-md hover:bg-amber-600 transition-colors"
            >
              {isDetailsVisible ? "Show Less" : "Show More"}
            </button>
          </div>
          <h3 className="text-3xl font-semibold text-amber-500 mb-6">
            Experts
          </h3>
          {selectedContract.experts.length === 0 ? (
            <p className="text-gray-400">
              No experts assigned to this contract.
            </p>
          ) : (
            selectedContract.experts.map((expert) => (
              <div
                key={expert.evaluatorName}
                className="p-4 bg-gray-900 rounded-xl border border-gray-700 mb-4 hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center">
                  <Image
                    className="md:max-w-none"
                    src={Logo}
                    width={86}
                    height={80}
                    alt="Expert profile"
                  />
                  <div className="ml-5">
                    <h5 className="text-lg font-semibold text-amber-400 flex items-center">
                      {expert.evaluatorName}
                      {"vip" in expert && expert.vip && (
                        <span className="ml-5 flex items-center bg-green-100 text-green-800 font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          <Image
                            className="mr-2"
                            src={VIP}
                            width={18}
                            height={18}
                            alt="VIP crown"
                          />
                          PREMIUM
                        </span>
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Evaluations Section */}
          <h3 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">
            Evaluations
          </h3>
          {evaluations.length === 0 ? (
            <p className="text-gray-400">No evaluations available.</p>
          ) : (
            evaluations.map((evaluation) => (
              <div
                key={evaluation.id}
                className="p-6 rounded-xl border border-gray-700 mb-4 shadow-sm hover:shadow-lg transition-shadow bg-gradient-to-br from-gray-800/80 to-gray-900/80"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-amber-400">
                    {evaluation.reviewer}
                  </h4>
                  <span className="text-sm text-gray-400">
                    {new Date(evaluation.date).toLocaleDateString()}
                  </span>
                </div>
                <p
                  className="text-gray-300 mb-2 cursor-pointer transition-all duration-300"
                  onClick={(e) => {
                    e.currentTarget.classList.toggle("line-clamp-3");
                    e.currentTarget.classList.toggle("backdrop-blur-sm");
                  }}
                >
                  {evaluation.comments}
                </p>

                <div className="text-amber-500 font-medium">
                  Rating: {evaluation.rating} / 5
                </div>

                <div className="flex space-x-4 mt-8">
                  <a
                    className="px-6 py-3 bg-amber-500 text-gray-900 rounded-xl font-semibold shadow-md hover:bg-amber-600 transition-colors"
                    href="/license/1"
                  >
                    Buy the Document
                  </a>
                  <a
                    className="px-6 py-3 bg-green-500 text-gray-900 rounded-xl font-semibold shadow-md hover:bg-green-600 transition-colors"
                    href="/license/1"
                  >
                    Subscribe to Premium
                  </a>
                  <a
                    className="px-6 py-3 bg-blue-500 text-gray-900 rounded-xl font-semibold shadow-md hover:bg-blue-600 transition-colors"
                    href="/license/1"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
