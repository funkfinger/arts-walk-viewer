import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { ProjectData } from "../data/data";

import Welcome from "../components/welcome";
import Head from "../components/head";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Index = () => (
  <div id="whole_page" className="container mx-auto px-5">
    <div className="block">
      <Head />
      <Welcome />
    </div>
    <Carousel infiniteLoop autoPlay>
      {ProjectData.map((project) => (
        <div
          className="border-solid border-2 h-300 text-center rounded-md"
          key={project.id}
        >
          <Link
            href={project.link}
            target="_blank"
            alt="Open Project"
            title="Open Project"
          >
            <h3 className="text-lg">{project.title}</h3>
            <Image
              src={project.img}
              alt={`${project.title} - thumbnail`}
              width="1024"
              height="200"
            />
          </Link>
          <br />
          {/* <iframe src={project.link} /> */}
        </div>
      ))}
    </Carousel>
  </div>
);

export default Index;
