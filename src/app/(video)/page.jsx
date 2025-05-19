import "@styles/globals.css"
import HomePage from "./homepage";
import AllVideo from "@components/video/allVideo";
export default function Home() {
  return (
    <HomePage>
      <AllVideo pathName={"videos/getallvideos"} />
    </HomePage>
  );
}
