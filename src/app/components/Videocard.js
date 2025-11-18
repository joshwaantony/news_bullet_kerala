export default function Videocard({ embed, title, desc }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md border bg-white">
      
      {/* Video */}
      <div className="w-full h-56 bg-black">
        <iframe
          className="w-full h-full"
          src={embed}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-sm text-gray-700 mb-4">{desc}</p>

        <button className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100">
          View Script
        </button>
      </div>
    </div>
  );
}
