export const coalProducts = [
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
        vip: true,
        reserve: "200,000 tons",
      },
      {
        name: "Industrial Fuels Inc.",
        location: "Hamburg, Germany",
        latitude: 53.5511,
        longitude: 9.9937,
        vip: false,
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
        vip: false,
        contact: "sales@powergencoals.au",
        reserve: "300,000 tons",
      },
      {
        name: "Energy Solutions",
        location: "London, UK",
        latitude: 51.5074,
        longitude: -0.1278,
        vip: false,
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
        vip: false,
        contact: "support@ecoheat.ca",
        reserve: "100,000 tons",
      },
      {
        name: "Budget Fuels",
        location: "Cape Town, South Africa",
        latitude: -33.9249,
        longitude: 18.4241,
        vip: false,
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
        vip: false,
        contact: "info@steelmakers.com",
        reserve: "500,000 tons",
      },
      {
        name: "CarbonTech",
        location: "Tokyo, Japan",
        latitude: 35.6895,
        longitude: 139.6917,
        vip: false,
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
        vip: false,
        contact: "sales@greenfuels.no",
        reserve: "60,000 tons",
      },
      {
        name: "Sustainable Energy Corp.",
        location: "Dublin, Ireland",
        latitude: 53.3498,
        longitude: -6.2603,
        vip: false,
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
        vip: false,
        reserve: "220,000 tons",
      },
      {
        name: "LowEmissions Energy",
        location: "Zurich, Switzerland",
        latitude: 47.3769,
        longitude: 8.5417,
        contact: "contact@lowemissions.ch",
        vip: false,
        reserve: "210,000 tons",
      },
    ],
  },
];

export const deliveryCompanies = [
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
export const coalSpecs = [
  { name: "Ash (dry basis, %)", value: "≤ 11%" },
  { name: "Volatile Matter (dry basis, %)", value: "≤ 20.0%-28.0%" },
  { name: "Sulfur content (dry basis, %)", value: "≤ 0.85%" },
  { name: "Total Moisture (as received, %)", value: "≤ 10.0%" },
  { name: "G index", value: "≥ 75.0" },
  { name: "Mercury (Hgd)", value: "≤ 0.6 μg/g" },
  { name: "Arsenic (Asd)", value: "≤ 80 μg/g" },
  { name: "Phosphorus (Pd)", value: "≤ 0.15%" },
  { name: "Chlorine (Cld)", value: "≤ 0.3%" },
  { name: "Fluorine (Fd)", value: "≤ 200 μg/g" },
];
