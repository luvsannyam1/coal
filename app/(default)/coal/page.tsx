"use client";

import { useState } from "react";

const coalProducts = [
  {
    name: "Premium Anthracite Coal",
    description:
      "High-grade anthracite with low ash content, ideal for industrial applications.",
    price: "Starting from $150/ton",
    companies: [
      {
        name: "Global Coal Ltd.",
        location: "New York, USA",
        latitude: 40.7128,
        longitude: -74.006,
        contact: "contact@globalcoal.com",
        reserve: "200,000 tons",
      },
      {
        name: "Industrial Fuels Inc.",
        location: "Hamburg, Germany",
        latitude: 53.5511,
        longitude: 9.9937,
        contact: "info@industrialfuels.de",
        reserve: "150,000 tons",
      },
    ],
  },
  {
    name: "Bituminous Coal",
    description:
      "Versatile coal with high energy output, suitable for power generation.",
    price: "Starting from $120/ton",
    companies: [
      {
        name: "PowerGen Coals",
        location: "Sydney, Australia",
        latitude: -33.8688,
        longitude: 151.2093,
        contact: "sales@powergencoals.au",
        reserve: "300,000 tons",
      },
      {
        name: "Energy Solutions",
        location: "London, UK",
        latitude: 51.5074,
        longitude: -0.1278,
        contact: "info@energysolutions.co.uk",
        reserve: "250,000 tons",
      },
    ],
  },
  {
    name: "Lignite Coal",
    description: "Cost-effective coal for heating and power plants.",
    price: "Starting from $90/ton",
    companies: [
      {
        name: "EcoHeat Supplies",
        location: "Vancouver, Canada",
        latitude: 49.2827,
        longitude: -123.1207,
        contact: "support@ecoheat.ca",
        reserve: "100,000 tons",
      },
      {
        name: "Budget Fuels",
        location: "Cape Town, South Africa",
        latitude: -33.9249,
        longitude: 18.4241,
        contact: "sales@budgetfuels.co.za",
        reserve: "80,000 tons",
      },
    ],
  },
  {
    name: "Coking Coal",
    description:
      "Essential for steel production, offering high carbon content.",
    price: "Starting from $180/ton",
    companies: [
      {
        name: "SteelMakers Resources",
        location: "Pittsburgh, USA",
        latitude: 40.4406,
        longitude: -79.9959,
        contact: "info@steelmakers.com",
        reserve: "500,000 tons",
      },
      {
        name: "CarbonTech",
        location: "Tokyo, Japan",
        latitude: 35.6895,
        longitude: 139.6917,
        contact: "contact@carbontech.jp",
        reserve: "450,000 tons",
      },
    ],
  },
  {
    name: "Peat Coal",
    description: "Eco-friendly option with moderate heating value.",
    price: "Starting from $70/ton",
    companies: [
      {
        name: "Green Fuels",
        location: "Oslo, Norway",
        latitude: 59.9139,
        longitude: 10.7522,
        contact: "sales@greenfuels.no",
        reserve: "60,000 tons",
      },
      {
        name: "Sustainable Energy Corp.",
        location: "Dublin, Ireland",
        latitude: 53.3498,
        longitude: -6.2603,
        contact: "info@sustainableenergy.ie",
        reserve: "50,000 tons",
      },
    ],
  },
  {
    name: "Sub-bituminous Coal",
    description: "Lower sulfur content, great for reducing emissions.",
    price: "Starting from $110/ton",
    companies: [
      {
        name: "CleanBurn Coals",
        location: "Denver, USA",
        latitude: 39.7392,
        longitude: -104.9903,
        contact: "info@cleanburn.com",
        reserve: "220,000 tons",
      },
      {
        name: "LowEmissions Energy",
        location: "Zurich, Switzerland",
        latitude: 47.3769,
        longitude: 8.5417,
        contact: "contact@lowemissions.ch",
        reserve: "210,000 tons",
      },
    ],
  },
];

const deliveryCompanies = [
  {
    name: "FastTrack Logistics",
    services: [
      {
        type: "Standard Delivery",
        deliveryTime: "3-5 business days",
        price: "$50/ton",
      },
      {
        type: "Express Delivery",
        deliveryTime: "1-2 business days",
        price: "$80/ton",
      },
      {
        type: "International Shipping",
        deliveryTime: "7-10 business days",
        price: "$150/ton",
      },
    ],
    contact: "support@fasttracklogistics.com",
    headquarters: "Atlanta, USA",
  },
  {
    name: "Global Freight Solutions",
    services: [
      {
        type: "Economy Shipping",
        deliveryTime: "5-7 business days",
        price: "$40/ton",
      },
      {
        type: "Priority Freight",
        deliveryTime: "2-3 business days",
        price: "$70/ton",
      },
      {
        type: "Overseas Cargo",
        deliveryTime: "10-15 business days",
        price: "$130/ton",
      },
    ],
    contact: "info@globalfreight.com",
    headquarters: "Rotterdam, Netherlands",
  },
  {
    name: "EcoTransports",
    services: [
      {
        type: "Green Delivery",
        deliveryTime: "4-6 business days",
        price: "$45/ton",
      },
      {
        type: "Express Green Shipping",
        deliveryTime: "2 business days",
        price: "$75/ton",
      },
      {
        type: "International Eco Shipping",
        deliveryTime: "8-12 business days",
        price: "$140/ton",
      },
    ],
    contact: "contact@ecotransports.org",
    headquarters: "Stockholm, Sweden",
  },
  {
    name: "CargoMaster",
    services: [
      {
        type: "Bulk Freight",
        deliveryTime: "6-8 business days",
        price: "$35/ton",
      },
      {
        type: "Fast Bulk Delivery",
        deliveryTime: "3-4 business days",
        price: "$65/ton",
      },
      {
        type: "Global Bulk Shipping",
        deliveryTime: "12-16 business days",
        price: "$120/ton",
      },
    ],
    contact: "sales@cargomaster.com",
    headquarters: "Shanghai, China",
  },
  {
    name: "SwiftHaul",
    services: [
      {
        type: "Same Day Delivery",
        deliveryTime: "Same day",
        price: "$100/ton",
      },
      {
        type: "Next Day Shipping",
        deliveryTime: "1 business day",
        price: "$85/ton",
      },
      {
        type: "International Expedited",
        deliveryTime: "5-7 business days",
        price: "$160/ton",
      },
    ],
    contact: "info@swifthaul.net",
    headquarters: "London, UK",
  },
];

export default function CoalMarketPage() {
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

  interface Company {
    name: string;
    location: string;
    latitude: number;
    longitude: number;
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

            {/* Delivery Options Section */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-gray-200 mb-2">
                Delivery Options
              </h4>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                {/* Delivery Company Selector */}
                <div className="mb-3 sm:mb-0">
                  <label className="block text-gray-300 mb-1">
                    Delivery Company:
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
                    {selectedDeliveryCompany.services.map((service, index) => (
                      <option key={index} value={index}>
                        {service.type} - {service.deliveryTime} -{" "}
                        {service.price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
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
                  <h5 className="text-lg font-semibold text-amber-400">
                    {company.name}
                  </h5>
                  <p className="text-gray-300">{company.location}</p>
                  <p className="text-gray-400 text-sm">
                    Contact: {company.contact}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Reserve: {company.reserve}
                  </p>
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
    </section>
  );
}
