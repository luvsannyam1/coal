interface Contract {
  title: string;
  description: string;
  type: string;
  expiryDate: string;
}

interface LicenseCardProps {
  contract: Contract;
  isSelected: boolean;
  onSelect: (contract: Contract) => void;
}

export default function LicenseCard({
  contract,
  isSelected,
  onSelect,
}: LicenseCardProps) {
  return (
    <div
      className={`cursor-pointer rounded-2xl border p-4 shadow-md transition-transform duration-300 hover:scale-105 ${
        isSelected ? "border-amber-500 bg-amber-50" : "border-gray-300 bg-white"
      }`}
      onClick={() => onSelect(contract)}
    >
      <h3 className="text-xl font-semibold text-gray-800">{contract.title}</h3>
      <p className="text-sm text-gray-500">{contract.description}</p>
      <div className="mt-2 text-gray-600">
        <span className="font-medium">Type:</span> {contract.type}
      </div>
      <div className="text-gray-600">
        <span className="font-medium">Valid Until:</span> {contract.expiryDate}
      </div>
    </div>
  );
}
