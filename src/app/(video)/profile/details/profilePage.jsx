"use client"
import "@styles/globals.css"
import { useSelector } from "react-redux";
export default function ProfilePage({children}) {
  const isOpen = useSelector((state) => state.sidebar.isOpen)
  return (
    <div className={`bg-[#020202] text-white flex-col flex flex-wrap mt-2.5 gap-3  md:mt-[8vh] md:p-4 min-h-screen  ${isOpen ? "md:w-[83vw] md:ml-[2vw]  ":"md:w-[85vw] "}`}>
      {children}
      <div className="mb-[8vh] none md:hidden"></div>
    </div>
  );
}

