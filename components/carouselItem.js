import Image from "next/image";
import Link from "next/link";

const CarouselItem = (p) => {
  const { project } = p;
  const { id, link, title, img } = project;
  return (
    <div
      className="border-solid border-2 h-300 text-center rounded-md"
      key={id}
    >
      <Link href={link} target="_blank" alt="Open Project" title="Open Project">
        <h3 className="text-lg">{title}</h3>
        <Image
          src={img}
          alt={`${title} - thumbnail`}
          width="1024"
          height="200"
        />
      </Link>
      <br />
    </div>
  );
};

export default CarouselItem;
