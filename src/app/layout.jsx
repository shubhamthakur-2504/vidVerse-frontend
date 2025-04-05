import Navbar from "@components/navbar";
import "@styles/globals.css";
import { Store } from "@lib/store";
import { Provider } from "react-redux";

export const metadata = {
  title: "Vidverse",
  description: "Video sharing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#2E073F] text-white">
        <Provider store={Store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
