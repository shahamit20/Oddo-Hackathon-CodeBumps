import React from 'react'

function Category() {
  return (
    <div className='w-full mt-5 bg-orange-50 rounded-xl py-10 px-4'>
  {/* Heading */}
  <div className='text-center mb-10'>
    <h2 className='text-3xl font-bold text-gray-800'>Shop by Category</h2>
    <p className='text-gray-600 mt-2'>
      Discover amazing pre-loved items across all categories. Every swap saves the planet one outfit at a time.
    </p>
  </div>

  {/* Category Cards */}
  <div className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6'>
    {[
      {
        title: "Women",
        items: "1,240 items",
        icon: "👑",
        bg: "bg-pink-100",
        text: "text-purple-600",
      },
      {
        title: "Men",
        items: "890 items",
        icon: "👕",
        bg: "bg-blue-100",
        text: "text-blue-600",
      },
      {
        title: "Kids",
        items: "456 items",
        icon: "🧒",
        bg: "bg-green-100",
        text: "text-green-600",
      },
      {
        title: "Accessories",
        items: "678 items",
        icon: "⌚",
        bg: "bg-orange-100",
        text: "text-orange-600",
      },
      {
        title: "Shoes",
        items: "567 items",
        icon: "⚡",
        bg: "bg-yellow-100",
        text: "text-yellow-600",
      },
      {
        title: "Eyewear",
        items: "234 items",
        icon: "👓",
        bg: "bg-cyan-100",
        text: "text-cyan-600",
      },
    ].map((cat, idx) => (
      <div
        key={idx}
        className='bg-white rounded-xl shadow-sm p-5 flex flex-col items-center justify-center text-center hover:shadow-md transition'
      >
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-xl text-5xl font-bold ${cat.bg} ${cat.text}`}
        >
          {cat.icon}
        </div>
        <h3 className='mt-3 font-semibold text-gray-800'>{cat.title}</h3>
        <span className='mt-1 text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full'>
          {cat.items}
        </span>
      </div>
    ))}
  </div>

  {/* Browse Button */}
  <div className='mt-10 flex justify-center'>
    <a
      href='#'
      className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition'
    >
      Browse All Categories
    </a>
  </div>
</div>

  )
}

export default Category