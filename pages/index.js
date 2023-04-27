import Image from "next/image";
import { Inconsolata } from "next/font/google";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { ProjectData } from '../data/data'
import Link from "next/link";

const font = Inconsolata({ subsets: ["latin"] });

const Home = () => (
  <div id="whole_page" className="font-serif container mx-auto px-5">
    <heading>
      <h1 className={`text-xl ${font.className}`}>
        Welcome to PCDS Arts Walk!
      </h1>
    </heading>
    <main>Welcome</main>
    <Carousel>
      {
        ProjectData.map((project) => (
          <div className="border-solid border-2 w-2/3 h-300 text-center rounded-md" key={project.id}>
            <h3 className="text-lg">{project.title}</h3>
            <br/>
              <a href={project.link} target="_blank">
                Open Project
              </a>
            <br />
            <iframe src={project.link} />
          </div>
        ))
      }
    </Carousel>
  </div>
);
export default Home;
