"use client"
import "@styles/globals.css"
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
export default function layout({children}) {
  const isOpen = useSelector((state) => state.sidebar.isOpen)
  return (
    <div className={`bg-[#020202] text-white flex-col flex flex-wrap mt-2.5 gap-3  md:mt-[8vh] md:p-4  ${isOpen ? "md:w-[83vw] md:ml-[2vw]  ":"md:w-[85vw] "}`}>
      <ToastContainer />
      {children}
      <div className="mb-[8vh] none md:hidden"></div>
    </div>
  );
}