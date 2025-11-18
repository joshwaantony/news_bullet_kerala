import Link from "next/link";

export default function Donation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 
      bg-gradient-to-br from-[#E87331] to-[#563D2F] text-white text-center">

      {/* Logo */}
      <img
        src="/logo.jpg"
        alt="Logo"
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-6 rounded-full"
      />

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
        Support News Bullet Kerala!
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-lg max-w-xl md:max-w-2xl leading-relaxed mb-6 px-2">
        Your donations help us bring authentic, independent news stories to you.
      </p>

      {/* Description */}
      <p className="text-sm sm:text-base max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed mb-10 px-3">
        At News Bullet Kerala, we connect the logic behind every story.
        We believe in journalism that empowers you to think critically and stay
        informed about what truly matters in our community.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs sm:max-w-md">
        {/* Donate button */}
        <button className="bg-white text-orange-700 font-semibold py-3 rounded-xl shadow-md 
          hover:bg-gray-100 transition-all">
          Donate & Support
        </button>

        {/* Outline button */}
        <Link href={"/video"} className="border border-white text-white py-3 rounded-xl font-semibold 
          hover:bg-white hover:text-orange-700 transition-all">
          Continue Without Donating
        </Link>
      </div>

      {/* Bottom small text */}
      <p className="mt-8 text-xs sm:text-sm opacity-90 px-2 max-w-sm">
        You can continue without donating, but your support keeps us independent.
      </p>
    </div>
  );
}
