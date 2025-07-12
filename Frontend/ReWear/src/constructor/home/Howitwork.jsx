// import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">How ReWear Works</h2>
      <p className="text-gray-500 text-lg mb-12">
        Simple, smart, and sustainable – join the fashion revolution
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            step: 1,
            title: "Upload & Share",
            description:
              "Take photos of clothes you no longer wear and list them on ReWear",
          },
          {
            step: 2,
            title: "Browse & Swap",
            description:
              "Find items you love and propose swaps with other community members",
          },
          {
            step: 3,
            title: "Earn & Redeem",
            description:
              "Earn points for every successful swap and redeem them for premium items",
          },
        ].map(({ step, title, description }) => (
          <div key={step} className="flex flex-col items-center text-center">
            <div className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
              {step}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500 max-w-xs">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg shadow-lg">
          Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
