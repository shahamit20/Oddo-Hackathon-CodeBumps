import React from 'react'
const Freshfinds = () => {
  const items = [
    {
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246', // denim jacket
      condition: 'good',
      title: 'Vintage Denim Jacket',
      size: 'M',
      user: 'Sarah K.',
      rating: 4.8,
      points: 25,
      actions: ['Swap', 'Redeem'],
    },
    {
      image: 'https://images.unsplash.com/photo-1593032465171-c98b5aa1b7a7', // red dress
      condition: 'like new',
      title: 'Floral Summer Dress',
      size: 'S',
      user: 'Emma L.',
      rating: 5.0,
      points: 30,
      actions: ['Swap'],
    },
    {
      image: 'https://images.unsplash.com/photo-1585386959984-a4155222e164', // sneakers
      condition: 'good',
      title: 'Classic White Sneakers',
      size: '8',
      user: 'Mike R.',
      rating: 4.6,
      points: 20,
      actions: ['Redeem'],
    },
    {
      image: 'https://images.unsplash.com/photo-1602810318743-9292f99cfe84', // black coat
      condition: 'new',
      title: 'Wool Winter Coat',
      size: 'L',
      user: 'Lisa M.',
      rating: 4.9,
      points: 45,
      actions: ['Swap', 'Redeem'],
    },
  ];

  return (
    <div className="px-6 py-10 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Fresh Finds</h2>
          <p className="text-gray-600">Recently added items from our community</p>
        </div>
        <button className="border px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-1">
          View All <span>&rarr;</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-gradient-to-b from-white to-green-50 shadow-sm hover:shadow-lg transition"
          >
            {/* Image & Label */}
            <div className="relative h-52 w-full rounded-t-xl overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full capitalize">
                {item.condition}
              </span>
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 text-gray-500 hover:text-red-500">
                ♡
              </button>
            </div>

            {/* Details */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">Size {item.size}</p>
              <p className="text-sm text-gray-600 mb-2">{item.user}</p>
              <div className="flex items-center text-sm text-yellow-600 font-medium">
                ⭐ {item.rating}
              </div>

              {/* Points + Actions */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded-full">
                  {item.points} pts
                </span>
                <div className="flex gap-2">
                  {item.actions.includes('Swap') && (
                    <button className="text-white bg-green-500 hover:bg-green-600 text-xs px-3 py-1 rounded">
                      ⇅ Swap
                    </button>
                  )}
                  {item.actions.includes('Redeem') && (
                    <button className="text-white bg-green-700 hover:bg-green-800 text-xs px-3 py-1 rounded">
                      Redeem
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freshfinds;
