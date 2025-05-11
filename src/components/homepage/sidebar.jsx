"use client"
import "@styles/globals.css"
import { useSelector } from "react-redux"
import Image from "next/image";
import profile from "/public/profile.svg"
import tweet from "/public/tweet.svg"
import subscriber from "/public/subscriber.svg"
import home from "/public/home.svg"
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Sidebar() {
    const isOpen = useSelector((state) => state.Sidebar.isOpen)
    let pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);
    pathname = segments[0];
    const isActive = (path) => pathname === path
    return (
        <div className={`flex flex-row md:flex-col h-[8vh] pb-2 pr-3 pl-3 md:h-screen md:m-2 w-screen bg-[#240332] items-center md:justify-start justify-between  md:gap-8 ${isOpen ? "md:w-[10vw] items-center transition-all duration-300 " : "md:w-[5vw] transition-all duration-400"} `}>

            <Link href={"/"}>
                <div className={`md:mt-[4vh] ${isActive("/") ? " rounded-2xl shadow-2xl bg-[#480764]" : ""} `}>
                    <Image src={home} alt="Home" width={20} height={20} className={`${isActive("/") ? "w-10 h-10 " : "w-6 h-6"} rounded-2xl transform hover:scale-110 transition-transform duration-200`} />
                </div>
            </Link>

            <Link href={"/tweet"}>
                <div className={`${isActive("/tweet") ? " rounded-2xl shadow-2xl bg-[#480764]" : ""}`}>
                    <Image src={tweet} alt="Tweet" width={20} height={20} className={`${isActive("/tweet") ? "w-10 h-10 " : "w-6 h-6"} rounded-2xl transform hover:scale-110 transition-transform duration-200`} />
                </div>
            </Link>

            <Link href={"/subscribed"}>
                <div className={`${isActive("/subscribed") ? " rounded-2xl shadow-2xl bg-[#480764]" : ""}`}>
                    <Image src={subscriber} alt="Subscriber" width={20} height={20} className={`${isActive("/subscribed") ? "w-10 h-10 " : "w-6 h-6"} rounded-2xl transform hover:scale-110 transition-transform duration-200`} />
                </div>
            </Link>

            <Link href={"/profile"}>
                <div className={`${isActive("/profile") ? " rounded-2xl shadow-2xl bg-[#480764]" : ""}`}>
                    <Image src={profile} alt="Profile" width={20} height={20} className={`${isActive("/profile") ? "w-10 h-10 " : "w-6 h-6"} rounded-2xl transform hover:scale-110 transition-transform duration-200`} />
                </div>
            </Link>

        </div>
    )
}