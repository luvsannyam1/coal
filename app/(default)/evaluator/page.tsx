"use client";
import { useState } from "react";
import Image from "next/image";
import { contracts } from "@/components/data/data";

import Logo from "@/public/images/OIP.jpg";
import VIP from "@/public/images/crown.png";

export default function LicensePage() {
  const [selectedContract, setSelectedContract] = useState(contracts[0]);

  // Mock evaluation data
  const evaluations = [
    {
      id: 1,
      reviewer: "John Doe",
      comments: "Great contract, very detailed and well-organized.",
      rating: 4.5,
      date: "2024-02-01",
    },
    {
      id: 2,
      reviewer: "Jane Smith",
      comments: "Some sections could be more clear, but overall good.",
      rating: 3.8,
      date: "2024-01-25",
    },
    {
      id: 3,
      reviewer: "Alice Johnson",
      comments: "Exceptional quality, exceeded expectations!",
      rating: 5.0,
      date: "2024-02-05",
    },
  ];

  // Update contract selection
  const handleContractSelect = (contract: (typeof contracts)[0]) => {
    setSelectedContract(contract);
  };

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
        <div>
          {/* Evaluations Section */}
          <h3 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">
            Review
          </h3>
          {evaluations.length === 0 ? (
            <p className="text-gray-400">No evaluations available.</p>
          ) : (
            evaluations.map((evaluation) => (
              <div
                key={evaluation.id}
                className="p-6 bg-gray-900 rounded-xl border border-gray-700 mb-4 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-amber-400">
                    {evaluation.reviewer}
                  </h4>
                  <span className="text-sm text-gray-400">
                    {new Date(evaluation.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-300 mb-2">{evaluation.comments}</p>
                <div className="text-amber-500 font-medium">
                  Rating: {evaluation.rating} / 5
                </div>
              </div>
            ))
          )}

          {/* Previous Evaluations Section */}
        </div>

        <div>
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
            <div className="p-8 rounded-3xl border border-amber-500 bg-gray-800 shadow-lg">
              <div className="flex items-center mb-6">
                <Image
                  className="mr-4"
                  src={VIP}
                  width={50}
                  height={50}
                  alt="VIP crown"
                />
                <h1 className="text-4xl font-bold text-amber-500">
                  Big Bag Mo LLC
                </h1>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <strong>Big Bag Mo LLC</strong> is a premier evaluation and
                consulting firm known for delivering high-quality assessments
                and strategic insights. With a reputation for precision and
                professionalism, Big Bag Mo LLC has become a trusted name in the
                industry, offering specialized evaluations tailored to meet
                diverse client needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-semibold text-amber-400 mb-2">
                    Evaluation Cost
                  </h3>
                  <p className="text-gray-300 text-lg">$3000 per evaluation</p>
                </div>

                <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-semibold text-amber-400 mb-2">
                    VIP Status
                  </h3>
                  <p className="text-green-400 text-lg">PREMIUM Member</p>
                </div>
              </div>

              <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold text-amber-400 mb-2">
                  Our Expertise
                </h3>
                <p className="text-gray-300">
                  Big Bag Mo LLC specializes in a range of industries, from tech
                  and finance to healthcare and construction. Our team of
                  seasoned professionals brings a wealth of knowledge and
                  experience, ensuring every evaluation is thorough and
                  insightful.
                </p>
              </div>

              <div className="p-6 bg-gray-900 rounded-xl border border-gray-700 mt-6">
                <h3 className="text-2xl font-semibold text-amber-400 mb-2">
                  Contractor Status
                </h3>
                <p className="text-red-400 text-lg">
                  This company is <strong>not</strong> a contractor.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">
              Previous Projects
            </h3>
            {contracts.length === 0 ? (
              <p className="text-gray-400">
                No previous evaluations available.
              </p>
            ) : (
              contracts.map((contract) => (
                <div
                  key={contract.id}
                  className="p-6 bg-gray-900 rounded-xl border border-gray-700 mb-4 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-amber-400">
                        {contract.title}
                      </h4>
                    </div>
                    <div className="text-amber-500 font-medium">
                      Contracted By : Big company
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <button className="px-6 py-3 bg-amber-500 text-gray-900 rounded-xl font-semibold shadow-md hover:bg-amber-600 transition-colors">
                      Buy the Document
                    </button>
                    <button className="px-6 py-3 bg-green-500 text-gray-900 rounded-xl font-semibold shadow-md hover:bg-green-600 transition-colors">
                      Subscribe to Premium
                    </button>
                  </div>
                </div>
              ))
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
