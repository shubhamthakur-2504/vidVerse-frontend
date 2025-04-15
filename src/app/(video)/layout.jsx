import Navbar from "@components/navbar";
import "@styles/globals.css";
// import Providers from "@components/Providers";
import Sidebar from "@components/sidebar";

export const metadata = {
  title: "Vidverse",
  description: "Video sharing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#2E073F] text-white w-screen h-screen">
        {/* <Providers> */}
          <div>
            <div className="md:fixed md:top-0 md:z-50 md:w-screen">
              <Navbar />
            </div>
            <div className="md:ml-[10vw]">
              <main>{children}</main>
            </div>
            <div className="fixed bottom-[-1px]  z-40 md:fixed md:left-0 md:top-[5vh] md:z-40">
              <Sidebar />
            </div>
          </div>
        {/* </Providers> */}
      </body>
    </html>
  );
}
