"use client"
import React from 'react'
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@lib/features/sidebarSlice";
import sidebarIcon from "/public/sidebar-logo.svg";
import Image from "next/image";
export default function SidebarButton() {
    const dispatch = useDispatch();
    const togglesidebar = () => {
        dispatch(toggleSidebar())
      }
  return (
    <button className="hidden md:block h-5 w-5">
          <Image src={sidebarIcon} alt="Sidebar" width={20} height={20} onClick={togglesidebar} className="w-5 h-5 rounded-2xl transform hover:scale-110 transition-transform duration-200" />
    </button>
  )
}
