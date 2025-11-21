// export default function StatsCard({ title, value }) {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow">
//       <h4 className="text-gray-600 text-sm">{title}</h4>
//       <p className="text-3xl font-bold text-black mt-2">{value}</p>
//     </div>
//   );
// }



export default function StatsCard({ title, value, icon }) {
  return (
    <div
      className="group p-5 rounded-2xl border bg-white shadow-md 
                 hover:shadow-xl transition-all hover:-translate-y-1
                 border-gray-200 hover:border-transparent 
                 hover:bg-gradient-to-r from-[#E87331] to-[#563D2F]"
    >
      {/* Title */}
      <h4 className="text-gray-700 text-sm font-medium group-hover:text-white transition-all">
        {title}
      </h4>

      {/* Value + Icon */}
      <div className="flex justify-between items-center mt-3">
        <p className="text-3xl font-bold text-black group-hover:text-white transition-all">
          {value}
        </p>

        {icon && (
          <span className="text-3xl text-[#E87331] group-hover:text-white transition-all">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
}
