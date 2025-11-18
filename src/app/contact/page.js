import {
  FaYoutube,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <>
    <Navbar/>

    
    <div className="min-h-screen bg-gradient-to-r from-[#E87331] to-[#563D2F] py-16 px-6 text-white">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-lg">
          Reach out to us anytime. We’re always here to listen.
        </p>
      </div>

      {/* White Card Box (Same as Support Page) */}
     <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl text-black shadow-2xl 
                rounded-3xl p-10 md:p-14">

  {/* Single Column Items */}
  <div className="flex flex-col gap-6">

    {/* Reusable Style */}
    {[
      { title: "YouTube", icon: <FaYoutube /> , link: "https://www.youtube.com/@newsbulletkerala" },
      { title: "Email", icon: <FaEnvelope />, link: "mailto" },
      { title: "Facebook", icon: <FaFacebook />, link: "https://" },
      { title: "Instagram", icon: <FaInstagram />, link: "https://" },
      { title: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/9567567" },
    ].map((item, index) => (
      <a
        key={index}
        href={item.link}
        target="_blank"
        className="group p-5 rounded-2xl border bg-white shadow-md hover:shadow-xl 
                   transition-all flex items-center justify-between hover:-translate-y-1
                   border-gray-200 hover:border-transparent hover:bg-gradient-to-r 
                   from-[#E87331] to-[#563D2F]"
      >
        {/* Title */}
        <span className="text-lg font-semibold 
                         group-hover:text-white transition-all">
          {item.title}
        </span>

        {/* Icon */}
        <span className="text-3xl text-[#E87331] group-hover:text-white transition-all">
          {item.icon}
        </span>
      </a>
    ))}
  </div>
</div>

    </div>
    </>
  );
}
