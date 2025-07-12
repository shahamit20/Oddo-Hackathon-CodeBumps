import { useState } from "react";
import { Pencil, Star, CalendarDays, Clock4, RefreshCw, Package, Coins, MapPin } from "lucide-react";
function Userinfo() {

     const user = {
    name: "Sarah Johnson",
    location: "San Francisco, CA",
    joined: "2024-01-15",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    points: 250,
    items: 2,
    completedSwaps: 23,
    ongoingSwaps: 0,
  };

  return (
    <>
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex justify-between items-start">
          <div className="flex space-x-4">
            <img
              src={user.avatar}
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
              <div className="text-gray-500 text-sm flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{user.location}</span>
                <CalendarDays className="w-4 h-4 ml-4" />
                <span>Joined {user.joined}</span>
                <Star className="w-4 h-4 text-yellow-500 ml-4" />
                <span>{user.rating} rating</span>
              </div>
            </div>
          </div>
          <button className="text-green-600 hover:underline flex items-center text-sm">
            <Pencil className="w-4 h-4 mr-1" />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-sm text-gray-500">Points Balance</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-2xl font-bold text-green-600">{user.points}</span>
            <Coins className="text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-sm text-gray-500">Items Listed</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-2xl font-bold text-blue-600">{user.items}</span>
            <Package className="text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-sm text-gray-500">Completed Swaps</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-2xl font-bold text-purple-600">{user.completedSwaps}</span>
            <RefreshCw className="text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-sm text-gray-500">Ongoing Swaps</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-2xl font-bold text-orange-600">{user.ongoingSwaps}</span>
            <Clock4 className="text-orange-500" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Userinfo