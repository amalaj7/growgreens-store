import React from "react";

const subscriptionFeatures = [
  {
    icon: "🚚",
    title: "Weekly Delivery",
    description: "Fresh microgreens delivered to your doorstep every week",
  },
  {
    icon: "📦",
    title: "4 Boxes per Month",
    description: "Consistent supply throughout the month",
  },
  {
    icon: "🚗",
    title: "Free Home Delivery",
    description: "No additional shipping charges",
  },
];

const includedFeatures = [
  "One box feeds one person for a full week",
  "11 varieties to choose from",
  "Always fresh, never frozen",
  "Grown with care and expertise",
  "Convenient weekly schedule",
];

const whyChoose = [
  { 
    icon: "🍃", 
    title: "100% Natural", 
    desc: "Grown naturally without any harmful chemicals or artificial additives" 
  },
  { 
    icon: "📅", 
    title: "7 Years Experience", 
    desc: "Trusted expertise in cultivating premium quality microgreens" 
  },
  { 
    icon: "🛡️", 
    title: "No Pesticides, No Fertilizers", 
    desc: "Pure and safe microgreens for you and your family" 
  },
  { 
    icon: "🌾", 
    title: "Non-GMO Seeds", 
    desc: "Open pollinated seeds ensuring natural growth and authentic flavors" 
  },
  { 
    icon: "💰", 
    title: "Low Rates", 
    desc: "Premium quality at affordable prices - just ₹600/month" 
  },
  { 
    icon: "💧", 
    title: "Filtered RO Water", 
    desc: "Grown using purified water for maximum purity and safety" 
  },
  { 
    icon: "🍱", 
    title: "Food Grade Trays", 
    desc: "Cultivated in safe, food-grade trays maintaining highest hygiene standards" 
  },
  { 
    icon: "🚚", 
    title: "Free Home Delivery", 
    desc: "Farm to home - fresh delivery at no extra cost" 
  },
  { 
    icon: "♻️", 
    title: "100% Decomposable Medium", 
    desc: "Environmentally friendly growing medium that's fully biodegradable" 
  },
  { 
    icon: "🪪", 
    title: "FSSAI Certified", 
    desc: "Certified by Food Safety and Standards Authority of India" 
  },
  { 
    icon: "📍", 
    title: "Locally Grown", 
    desc: "Supporting local agriculture while reducing carbon footprint" 
  },
];

const importance = [
  {
    icon: "⭐",
    title: "40x More Nutrients",
    desc: "Studies have proved that microgreens contain up to 40 times more nutrients than their mature counterparts",
  },
  {
    icon: "❤️",
    title: "Rich in Essential Minerals",
    desc: "Packed with Potassium, Iron, and Fiber to support your overall health and wellness",
  },
  {
    icon: "⚡",
    title: "Vitamins & Antioxidants",
    desc: "Excellent source of vitamins, minerals, and powerful antioxidants for daily nutrition",
  },
  {
    icon: "💪",
    title: "Perfect for Fitness Enthusiasts",
    desc: "Ideal for gym-goers and athletes seeking nutrient-dense, low-calorie superfoods for optimal performance",
  },
];

const varieties = [
  { 
    name: "Pakchoi", 
    desc: "Mild cabbage-like flavor",
    image: "/images/varieties/pakchoi.jpg"
  },
  { 
    name: "Sunflower", 
    desc: "Nutty and crunchy texture",
    image: "/images/varieties/sunflower.jpg"
  },
  { 
    name: "Turnip", 
    desc: "Fresh and mildly sweet",
    image: "/images/varieties/turnip.jpg"
  },
  { 
    name: "Radish White", 
    desc: "Crisp and mildly peppery flavor",
    image: "/images/varieties/radish-white.jpg"
  },
  { 
    name: "Radish Red", 
    desc: "Bold color with spicy kick",
    image: "/images/varieties/radish-red.jpg"
  },
  { 
    name: "Radish Pink", 
    desc: "Delicate taste with vibrant color",
    image: "/images/varieties/radish-pink.jpg"
  },
  { 
    name: "Radish China Rose", 
    desc: "Sweet and slightly spicy",
    image: "/images/varieties/radish-china-rose.jpg"
  },
  { 
    name: "Mustard Green", 
    desc: "Sharp, tangy mustard flavor",
    image: "/images/varieties/mustard-green.jpg"
  },
  { 
    name: "Yellow Mustard", 
    desc: "Mild and slightly nutty",
    image: "/images/varieties/yellow-mustard.jpg"
  },
  { 
    name: "Mix Microgreens", 
    desc: "Variety of flavors and colors",
    image: "/images/varieties/mix-microgreens.jpg"
  },
  { 
    name: "Health Mix Microgreens", 
    desc: "Nutrient-packed superfood blend",
    image: "/images/varieties/health-mix-microgreens.jpg"
  },
];

export default function Subscription() {
  return (
    <div className="w-full bg-gray-50 pt-24">
      {/* Subscription Model Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-3">Simple Subscription Model</h2>
        <p className="text-center text-gray-600 mb-12">Fresh microgreens delivered weekly at an affordable price</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Plan Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">Monthly Plan</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-green-600 text-4xl font-bold">₹600</span>
                <span className="text-gray-600">per month</span>
              </div>
            </div>
            
            <p className="text-gray-700 font-medium mb-6">Everything you need for a healthy lifestyle</p>
            
            <div className="space-y-4 mb-8">
              {subscriptionFeatures.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-2 text-lg">{f.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{f.title}</div>
                    <div className="text-gray-600 text-sm">{f.description}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-200">
              Subscribe Now
            </button>
          </div>

          {/* What's Included Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-2xl font-bold mb-6">What's Included</h4>
            
            <ul className="space-y-3 mb-8">
              {includedFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="text-green-600 text-lg">✔</span>
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-green-600 text-white rounded-xl p-8 text-center">
              <div className="text-5xl font-bold">11</div>
              <div className="text-lg mt-2">Varieties Available</div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {varieties.slice(0, 6).map((v) => (
                  <div key={v.name} className="text-xs font-semibold truncate opacity-90" title={v.name}>
                    {v.name.length > 10 ? v.name.substring(0, 8) + "..." : v.name}
                  </div>
                ))}
              </div>
              <div className="text-xs mt-3 opacity-75">+ 5 more varieties</div>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Your Varieties Section - Featured in Subscription */}
      <div className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-3">Choose Your Varieties</h2>
        <p className="text-center text-gray-600 mb-12">11 carefully cultivated varieties of fresh microgreens, each packed with nutrients and flavor</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {varieties.map((variety) => (
            <div key={variety.name} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48 bg-gradient-to-br from-green-200 to-green-100 overflow-hidden">
                <img 
                  src={variety.image} 
                  alt={variety.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h5 className="font-bold text-gray-900 mb-1">{variety.name}</h5>
                <p className="text-gray-600 text-sm">{variety.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Grow Greens Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-200">
        <h2 className="text-4xl font-bold text-center mb-3">Why Choose Grow Greens?</h2>
        <p className="text-center text-gray-600 mb-12">Quality, safety, and sustainability in every box</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {whyChoose.map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h5 className="font-bold text-gray-900 mb-2">{item.title}</h5>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Importance of Microgreens Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-200">
        <h2 className="text-4xl font-bold text-center mb-3">Importance of Microgreens in Our Daily Life</h2>
        <p className="text-center text-gray-600 mb-12">Discover why microgreens are essential for modern nutrition and wellness</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {importance.map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">
              <div className="text-3xl flex-shrink-0">{item.icon}</div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">{item.title}</h5>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
