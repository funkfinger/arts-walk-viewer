// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-bootstrap/Carousel";
import { ProjectData } from "../data/data";

import Welcome from "../components/welcome";
import Head from "../components/head";
import CarouselItem from "../components/carouselItem";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Index = () => (
  <div id="whole_page" className="container mx-auto px-5">
    <div className="block">
      <Head />
      <Welcome />
    </div>
    <Carousel infiniteLoop autoPlay showThumbs={false}>
      {ProjectData.map((project) => (
        <CarouselItem project={project} key={project.id} />
      ))}
    </Carousel>
  </div>
);

export default Index;
