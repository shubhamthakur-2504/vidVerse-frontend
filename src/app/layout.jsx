import Navbar from "@components/navbar";
import "@styles/globals.css";

export const metadata = {
  title: "Vidverse",
  description: "Video sharing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#2E073F] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
