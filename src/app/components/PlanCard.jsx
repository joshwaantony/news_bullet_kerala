export default function PlanCard({ meta }) {
  return (
    <div className="bg-white text-black rounded-2xl shadow-xl p-8 relative">

      {/* Status */}
      <div className="absolute top-4 right-4 bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
        Not Subscribed
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold">{meta.name}</h2>

      {/* Price */}
      <p className="text-4xl font-extrabold text-[#231A15] mt-2">
        ₹{meta.amount}
        <span className="text-base font-medium text-gray-600">/{meta.period}</span>
      </p>

      <p className="text-gray-600 text-sm mt-1">
        Billed every {meta.interval} {meta.period}
      </p>

      {/* Description */}
      <p className="text-gray-700 mt-5 text-[15px] leading-relaxed">
        {meta.description || "No description available"}
      </p>

      {/* Subscribe Button */}
      <button
        className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-700 
        text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
      >
        Subscribe Now
      </button>
    </div>
  );
}
