"use client"
import Image from "next/image";
import "@styles/globals.css"
import { useSelector } from "react-redux";
import Card from "@components/card";
export default function Home() {
  const isOpen = useSelector((state) => state.Sidebar.isOpen)
  return (
    <div className={`bg-[#2E073F] text-white flex-col flex flex-wrap mt-2.5 gap-3 md:flex-row md:mt-[8vh] md:p-4 min-h-screen items-center justify-center ${isOpen ? "md:w-[83vw] md:ml-[2vw]  ":"md:w-[85vw] "}`}>
      <Card />
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <div className="mb-[8vh] none md:hidden"></div>
    </div>
  );
}
