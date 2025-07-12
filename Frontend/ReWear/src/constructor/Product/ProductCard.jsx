import React from 'react';
import { FiHeart } from 'react-icons/fi';

export default function ProductCard({ product }) {
  const isNew = (date) => {
    const uploaded = new Date(date);
    const now = new Date();
    const diffHours = Math.abs(now - uploaded) / 36e5;
    return diffHours <= 72;
  };

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition relative bg-white">
      {isNew(product.uploadedAt) && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-1">Size: {product.size}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-green-600 font-bold">{product.points} pts</span>
        <FiHeart className="text-gray-500 hover:text-red-400 cursor-pointer" />
      </div>
      <div className="mt-4 flex justify-between gap-2">
        <button className="flex-1 px-3 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200">Swap</button>
        <button className="flex-1 px-3 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">Redeem</button>
      </div>
    </div>
  );
}
