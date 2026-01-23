import Image from "next/image";

const ImageEffectServer = () => (
  <Image
    src="/foto.jpeg"
    alt="image user profile"
    placeholder="blur"
    blurDataURL="/foto.jpeg"
    style={{ objectFit: "cover" }}
    fill
    priority
  />
);

export { ImageEffectServer };
