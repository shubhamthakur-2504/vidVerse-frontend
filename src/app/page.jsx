"use client"
import Image from "next/image";
import "@styles/globals.css"
import { useSelector } from "react-redux";
export default function Home() {
  const isOpen = useSelector((state) => state.Sidebar.isOpen)
  return (
    <div className={`bg-[#2E073F] text-white flex-col flex  p-4 min-h-screen items-center justify-center ${isOpen ? "md:w-[83vw] md:ml-[2vw] ":"md:w-[85vw] "}`}>
      <h1 className="text-4xl font-bold">Welcome to Vidverse</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eaque neque autem maxime sequi, obcaecati totam eum necessitatibus cum placeat blanditiis odio! Corrupti minus illo magnam, voluptates consectetur pariatur repellendus!                d</p>
    </div>
  );
}
