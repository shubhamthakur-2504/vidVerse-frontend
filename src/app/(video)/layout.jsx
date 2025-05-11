import Navbar from "@components/homepage/navbar";
import "@styles/globals.css";
import Sidebar from "@components/homepage/sidebar";

export const metadata = {
  title: "Vidverse",
  description: "Video sharing platform",
};

export default function VideoLayout({ children }) {
  return (
    <div className="bg-[#2E073F] text-white ">
        <div>
          <div className="md:fixed md:top-0 md:z-50 md:w-screen">
            <Navbar />
          </div>
          <div className="md:ml-[8vw]">
            <main>{children}</main>
          </div>
          <div className="fixed bottom-[-1px]  z-40 md:fixed md:left-0 md:top-[5vh] md:z-40">
            <Sidebar />
          </div>
        </div>
    </div>
  );
}
