import SidebarButton from "./sidebarButton";
import Image from "next/image";
import searchIcon from "/public/search-logo.png";

export default function Navbar() {
  return (
    <nav className="bg-[#240332] text-[#EBD3F8] px-4 py-3 shadow-md border-b border-[#7A1CAC]/30 flex md:items-center justify-center">
      <div className="flex items-center justify-center ml-5 mr-2">
        <SidebarButton />
      </div>
      <div className="flex flex-col md:flex-row items-center  justify-between w-full gap-4 max-w-7xl mx-auto">
        <div className="start flex flex-col md:flex-row items-center justify-start md:mr-auto gap-4 ">

          {/* Logo */}
          <div className="text-2xl font-bold flex-shrink-0">
            <span className="text-[#AD49E1]">Vid</span>verse
          </div>
        </div>

        <div className="center flex items-center w-full justify-center">
          {/* Search Bar */}
          <div className="flex items-center w-full md:w-1/2 bg-[#7A1CAC] rounded px-2 py-1 transform hover:scale-105 transition-transform duration-200">
            <input
              type="search"
              placeholder="Search"
              className="flex-grow bg-transparent text-white placeholder:text-[#EBD3F8] focus:outline-none text-sm "
            />
            <Image src={searchIcon} alt="Search" width={20} height={20} className=" rounded-2xl transform hover:scale-110 transition-transform duration-200" />
          </div>
        </div>

        <div className="hidden md:block justify-end ">
          {/* Nav Links */}
          <ul className="flex gap-4 text-sm font-medium justify-center md:justify-end w-full md:w-auto">
            <li className="hover:text-[#AD49E1] transition-colors duration-200 cursor-pointer">
              profile
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
