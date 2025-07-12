import { Plus } from "lucide-react";

const items = [
  {
    id: 1,
    name: "Wool Blend Sweater",
    brand: "H&M",
    size: "L",
    condition: "Good",
    points: 25,
    image:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77", // Replace with real one
  },
  {
    id: 2,
    name: "Bohemian Maxi Skirt",
    brand: "Free People",
    size: "M",
    condition: "Like New",
    status: "Swap",
    points: 30,
    image:
      "https://images.unsplash.com/photo-1520975918108-c48e0ecf9b2d", // Replace with real one
  },
];

export default function MyItems() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">My Items</h2>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded flex items-center space-x-1">
          <Plus className="w-4 h-4" />
          <span>Add New Item</span>
        </button>
      </div>

      {/* Item Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">
                {item.brand} • Size {item.size}
              </p>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {item.status && (
                  <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    {item.status}
                  </span>
                )}
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  {item.points}pts
                </span>
                <span
                  className={`${
                    item.condition === "Good"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  } px-2 py-0.5 rounded-full`}
                >
                  {item.condition}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
