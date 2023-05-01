import Image from "next/image";

const Head = () => (
  <div className="w-40 h-fit">
    <Image
      src="./images/logo.svg"
      aria-label="PCDS logo"
      alt="PCDS logo"
      width="150"
      height="80"
      object-fit="cover"
    />
  </div>
);

export default Head;
