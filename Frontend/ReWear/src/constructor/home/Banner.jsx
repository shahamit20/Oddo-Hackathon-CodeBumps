import React from 'react'
import { Users, Recycle, TrendingUp } from 'lucide-react';

function Banner() {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      value: "15K+",
      label: "Active Users",
    },
    {
      icon: <Recycle className="h-6 w-6 text-green-600" />,
      value: "50K+",
      label: "Items Swapped",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      value: "2.3T",
      label: "CO₂ Saved",
    },
  ];

  return (
    <>
      <div
        className="w-full h-[25rem] mt-5 bg-cover bg-center relative rounded-xl shadow-md"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>

        {/* Text & CTA */}
        <div className="absolute inset-0 mt-[5rem] flex flex-col items-center justify-evenly gap-2 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Give your wardrobe a second life.
          </h1>
          <div className="space-x-4">
            <a
              href="#"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow transition"
            >
              Start Swapping
            </a>
            <a
              href="https://www.thredup.com" // example sustainable fashion ecommerce link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-green-100 text-green-700 px-6 py-2 rounded border border-green-600 shadow transition"
            >
              Browse
            </a>
          </div>
          <div className=" py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center ">
                  <div className="bg-green-100 p-4 rounded-full">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-green-400">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner