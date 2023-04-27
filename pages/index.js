import Image from "next/image";
import { Inconsolata } from "next/font/google";

const font = Inconsolata({ subsets: ["latin"] });

const Home = () => (
  <div id="whole_page" className="font-serif container mx-auto px-5">
    <heading>
      <h1 className={`text-xl ${font.className}`}>
        Welcome to PCDS Arts Walk!
      </h1>
    </heading>
    <main>Welcome</main>
  </div>
);
export default Home;
