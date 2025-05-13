import Providers from "@components/Providers";
import "@styles/globals.css";
export const metadata = {
  title: "Vidverse",
  description: "Video sharing platform",
};

export default function RootLayout({ children }) {
  const preloadedState = {}
  return (
    <html lang="en">
      <body className="bg-[#2E073F] text-white ">
        <Providers preloadedState={preloadedState}>

          <main>
            {children}
          </main>

        </Providers>
      </body>
    </html>
  );
}
