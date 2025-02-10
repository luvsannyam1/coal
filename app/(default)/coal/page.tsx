"use client";

import Popup from "@/components/popup";
import { useState } from "react";
import Image from "next/image";
import {
  coalProducts,
  deliveryCompanies,
  coalSpecs,
} from "@/components/data/data";

import Logo from "@/public/images/OIP.jpg";

export default function CoalMarketPage() {
  const tabs = [
    { label: "Company Information" },
    { label: "Coal Specification" },
  ];
  const [selectTab, setSelectedTab] = useState(0);

  const [selectedProduct, setSelectedProduct] = useState(coalProducts[0]);
  const [currentBid, setCurrentBid] = useState(
    parseInt(selectedProduct.price.replace(/[^0-9]/g, ""))
  );
  const [bidInput, setBidInput] = useState("");
  const [orderAmounts, setOrderAmounts] = useState(
    selectedProduct.companies.map(() => "")
  );
  const [totalOrderAmount, setTotalOrderAmount] = useState(0);
  const [orderSummaries, setOrderSummaries] = useState<
    {
      companyName: string;
      amount: string;
      latitude: number;
      longitude: number;
      totalCost: number;
    }[]
  >([]);
  const [overallTotalCost, setOverallTotalCost] = useState(0);

  // New states for delivery options:
  const [selectedDeliveryCompany, setSelectedDeliveryCompany] = useState(
    deliveryCompanies[0]
  );
  const [selectedDeliveryService, setSelectedDeliveryService] = useState(
    deliveryCompanies[0].services[0]
  );

  const [selectedCompany, setSelectedCompany] = useState<Company | undefined>(
    undefined
  );

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  interface Company {
    name: string;
    location: string;
    latitude: number;
    longitude: number;
    vip: boolean;
    contact: string;
    reserve: string;
  }

  interface Product {
    name: string;
    description: string;
    price: string;
    companies: Company[];
  }

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentBid(parseInt(product.price.replace(/[^0-9]/g, "")));
    setBidInput("");
    setOrderAmounts(product.companies.map(() => ""));
    setTotalOrderAmount(0);
    setOrderSummaries([]);
    setOverallTotalCost(0);
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

  const handleOrderAmountChange = (index: number, value: string) => {
    const updatedAmounts = [...orderAmounts];
    updatedAmounts[index] = value;
    setOrderAmounts(updatedAmounts);

    const total = updatedAmounts.reduce(
      (acc, amount) => acc + (parseFloat(amount) || 0),
      0
    );
    setTotalOrderAmount(total);
  };

  // Handler for changing the selected delivery company:
  const handleDeliveryCompanyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const companyIndex = parseInt(e.target.value, 10);
    const company = deliveryCompanies[companyIndex];
    setSelectedDeliveryCompany(company);
    // Reset delivery service to the first option of the selected company
    setSelectedDeliveryService(company.services[0]);
  };

  // Handler for changing the selected delivery service:
  const handleDeliveryServiceChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const serviceIndex = parseInt(e.target.value, 10);
    setSelectedDeliveryService(selectedDeliveryCompany.services[serviceIndex]);
  };

  const handlePlaceOrder = (company: Company, index: number) => {
    if (orderAmounts[index]) {
      const orderAmount = parseFloat(orderAmounts[index]);
      const bidPrice = currentBid; // coal price per ton from the bid
      // Extract the numeric delivery price from the selected service (e.g., "$50/ton" becomes 50)
      const deliveryPrice = parseFloat(
        selectedDeliveryService.price.replace(/[^0-9.]/g, "")
      );
      const costPerTon = bidPrice + deliveryPrice;
      const orderTotalCost = orderAmount * costPerTon;

      const newOrder = {
        companyName: company.name,
        latitude: company.latitude,
        longitude: company.longitude,
        amount: orderAmounts[index],
        totalCost: orderTotalCost,
      };
      setOrderSummaries([...orderSummaries, newOrder]);
      setOrderAmounts((prev) => {
        const updated = [...prev];
        updated[index] = "";
        return updated;
      });
      // Update the overall total cost using a functional update to ensure accuracy
      setOverallTotalCost((prev) => prev + orderTotalCost);
      alert(
        `Order of ${orderAmounts[index]} tons placed with ${
          company.name
        }!\nTotal Cost: $${orderTotalCost.toLocaleString()}`
      );
    } else {
      alert("Please enter an order amount before placing an order.");
    }
  };

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
        {/* Available Products */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">
            Available Coal Products
          </h2>
          {coalProducts.map((product, index) => (
            <div
              key={index}
              className={`cursor-pointer mb-4 p-4 rounded-2xl border transition-transform transform hover:scale-105 ${
                selectedProduct.name === product.name
                  ? "border-amber-500 bg-gray-800"
                  : "border-gray-700 bg-gray-900"
              }`}
              onClick={() => handleProductSelect(product)}
            >
              <h3 className="text-xl font-semibold text-gray-200">
                {product.name}
              </h3>
              <p className="text-amber-200/65">{product.description}</p>
            </div>
          ))}
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">
            Product Details
          </h2>
          <div className="p-8 rounded-3xl border border-amber-500 bg-gray-800 shadow-lg">
            <h3 className="text-3xl font-semibold text-amber-500 mb-6">
              {selectedProduct.name}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            {/* Starting Price */}
            <h4 className="text-2xl font-semibold text-gray-200 mb-2">
              {selectedProduct.price}
            </h4>

            {/* Current Bid */}
            <h4 className="text-xl text-gray-300 mb-4">
              Current Bid:{" "}
              <span className="text-green-400">
                ${currentBid.toLocaleString()}
              </span>
            </h4>

            {/* Bidding Section */}
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

            {/* Companies Selling This Coal */}
            <h4 className="text-2xl font-semibold text-gray-200 mb-4">
              Available from:
            </h4>
            <ul className="space-y-3">
              {selectedProduct.companies.map((company, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-900 rounded-xl border border-gray-700"
                >
                  <div
                    className="flex"
                    onClick={() => {
                      setSelectedCompany(company);
                      setIsPopupOpen(true);
                    }}
                  >
                    <Image
                      className="md:max-w-none"
                      src={Logo}
                      width={86}
                      height={80}
                      alt="Secondary illustration"
                    />
                    <div className="ml-5">
                      <h5 className="text-lg font-semibold text-amber-400">
                        {company.name}
                        {company.vip && (
                          <span className="ml-5 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            VIP
                          </span>
                        )}
                      </h5>
                      <p className="text-gray-300">{company.location}</p>
                      <p className="text-gray-400 text-sm">
                        Contact: {company.contact}
                      </p>
                      <p className="text-gray-400 text-sm">
                        Reserve: {company.reserve}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center space-x-3">
                    <input
                      type="number"
                      placeholder="Order amount (tons)"
                      value={orderAmounts[index]}
                      onChange={(e) =>
                        handleOrderAmountChange(index, e.target.value)
                      }
                      className="flex-1 p-3 rounded-xl border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <button
                      className="py-3 px-4 bg-amber-500 text-gray-900 font-semibold rounded-xl hover:bg-amber-600 transition"
                      onClick={() => handlePlaceOrder(company, index)}
                    >
                      Place Order
                    </button>
                  </div>

                  {/* Delivery Options Section */}
                  <div className="mb-6 pt-2">
                    <h4 className="text-l font-semibold text-gray-200 mb-2">
                      Delivery Options
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                      {/* Delivery Company Selector */}
                      <div className="mb-3 sm:mb-0">
                        <label className="block text-gray-300 mb-1">
                          2 Delivery Company:
                        </label>
                        <select
                          value={deliveryCompanies.findIndex(
                            (comp) => comp.name === selectedDeliveryCompany.name
                          )}
                          onChange={handleDeliveryCompanyChange}
                          className="p-2 rounded border border-gray-700 bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          {deliveryCompanies.map((company, index) => (
                            <option key={index} value={index}>
                              {company.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Delivery Service Selector */}
                      <div>
                        <label className="block text-gray-300 mb-1">
                          Service Option:
                        </label>
                        <select
                          value={selectedDeliveryCompany.services.findIndex(
                            (srv) => srv.type === selectedDeliveryService.type
                          )}
                          onChange={handleDeliveryServiceChange}
                          className="p-2 rounded border border-gray-700 bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          {selectedDeliveryCompany.services.map(
                            (service, index) => (
                              <option key={index} value={index}>
                                {service.type} - {service.deliveryTime} -{" "}
                                {service.price}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total Order Amount */}
            <h4 className="text-xl text-gray-300 mt-6">
              Total Order Amount:{" "}
              <span className="text-amber-400">
                {totalOrderAmount.toLocaleString()} tons
              </span>
            </h4>

            {/* Order Summary */}
            <h4 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
              Order Summary
            </h4>
            <ul className="space-y-2">
              {orderSummaries.map((order, index) => (
                <li key={index} className="text-gray-300">
                  {order.amount} tons from {order.companyName} - Total Cost: $
                  {order.totalCost.toLocaleString()}
                  <div className="rounded-2xl overflow-hidden border border-gray-700 mt-2">
                    <iframe
                      src={`https://www.google.com/maps?q=${order.latitude},${order.longitude}&hl=es;z=14&output=embed`}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      loading="lazy"
                    ></iframe>
                  </div>
                </li>
              ))}
            </ul>

            {/* Overall Total Cost */}
            <h4 className="text-xl text-gray-300 mt-6">
              Overall Total Cost:{" "}
              <span className="text-amber-400">
                ${overallTotalCost.toLocaleString()}
              </span>
            </h4>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsPopupOpen(true)}
        className="py-2 px-4 bg-amber-500 text-gray-900 font-semibold rounded-xl"
      >
        Open Popup
      </button>

      {/* Popup Component */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Product Specifications"
      >
        <div className="flex border-b border-gray-700">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`py-2 px-4 text-sm font-medium focus:outline-none ${
                selectTab === index
                  ? "border-b-2 border-amber-500 text-amber-500"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {selectTab === 0 && (
          <div>
            <div
              className="flex"
              onClick={() => {
                setIsPopupOpen(true);
              }}
            >
              <Image
                className="md:max-w-none"
                src={Logo}
                width={80}
                height={80}
                alt="Secondary illustration"
              />
              <div className="ml-5">
                <h5 className="text-lg font-semibold text-amber-400">
                  {selectedCompany?.name}

                  {selectedCompany?.vip && (
                    <span className="ml-5 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      VIP
                    </span>
                  )}
                </h5>
                <p className="text-gray-300">{selectedCompany?.location}</p>
                <p className="text-gray-400 text-sm">
                  Contact: {selectedCompany?.contact}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm">
              Company Description:
              <br /> Mongolian Mining Corporation (“MMC” or the “Company”; SEHK
              Stock Code: 975) is a high-quality coking coal producer and
              exporter in Mongolia. The Company owns and operates two open-pit
              coking coal mines - Ukhaa Khudag and Baruun Naran, both located in
              Umnugobi aimag of Mongolia. MMC’s operations have grown rapidly
              from a green-field project in 2009 to a world-standard mining
              complex to date. With its premium quality coal products,
              international standard project development and effective
              management practices, the Company has already secured its position
              as the largest producer and exporter of washed coal in Mongolia.
              In 2010, after only one year of fast-paced operations, the Company
              was successfully listed on the main board of Hong Kong Stock
              Exchange, making it the first Mongolian company to offer its
              shares internationally. With integrated coal mining operations
              combined with leading edge technologies, MMC was able to reach the
              quickest ramp-up of mining operations in the country based on the
              best international practices. Located adjacent to the Chinese
              border and the target market region, MMC has a competitive cost
              structure and a strategic advantage to compete at the world
              market. While strengthening its position as a reliable supplier of
              high-quality coking coal products and boosting its competitiveness
              in the international market, MMC is successfully building a
              fully-integrated coking coal mining, processing, transportation
              and marketing platform.
            </p>

            <iframe
              src={`https://www.google.com/maps?q=${selectedCompany?.latitude},${selectedCompany?.longitude}&hl=es;z=14&output=embed`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        )}
        {selectTab === 1 && (
          <table className="w-full text-sm text-left text-gray-200">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Parameter
                </th>
                <th scope="col" className="px-6 py-3">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {coalSpecs.map((spec, index) => (
                <tr
                  key={index}
                  className="bg-gray-800 border-b border-gray-700"
                >
                  <td className="px-6 py-4">{spec.name}</td>
                  <td className="px-6 py-4">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button
          onClick={() => setIsPopupOpen(false)}
          className="py-2 px-4 bg-green-500 text-gray-900 font-semibold rounded-xl"
        >
          Close
        </button>
      </Popup>
    </section>
  );
}
