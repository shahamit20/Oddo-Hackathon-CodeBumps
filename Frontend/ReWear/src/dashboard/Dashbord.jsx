import { useState } from "react";
import { Pencil, Star, CalendarDays, Clock4, RefreshCw, Package, Coins, MapPin, User } from "lucide-react";
import Userinfo from "./Userinfo";
import MyItems from "./Myitem";
import Swap from "./Swap";


export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("overview");

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

    const tabs = [
        { label: "Overview", key: "overview", icon: <span className="text-green-600">👤</span> },
        { label: `My Items (${user.items})`, key: "items", icon: <Package className="w-4 h-4" /> },
        { label: `Swaps (${user.ongoingSwaps})`, key: "swaps", icon: <RefreshCw className="w-4 h-4" /> },
    ];

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Page Heading */}
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-500 mb-4">Manage your profile, items, and swaps</p>

            {/* Tabs */}
            <div className="flex space-x-6 border-b mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`pb-2 text-sm font-medium flex items-center space-x-1 ${activeTab === tab.key
                                ? "text-green-600 border-b-2 border-green-600"
                                : "text-gray-600"
                            }`}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Profile Information */}
            {activeTab === 'overview' && <Userinfo />}
            {activeTab === 'items' && <MyItems />}
            {activeTab === 'swaps' && <Swap />}

            {/* Recent Activity Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Recent Activity</h4>
                <p className="text-gray-500 text-sm">No recent activity yet.</p>
            </div>
        </div>
    );
}
