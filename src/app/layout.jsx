import Navbar from "@components/navbar";
import "@styles/globals.css";
import Providers from "@components/Providers";

export const metadata = {
  title: "Vidverse",
  description: "Video sharing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#2E073F] text-white">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
