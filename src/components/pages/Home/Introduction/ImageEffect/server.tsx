import Image from "next/image";

const ImageEffectServer = () => (
  <Image
    src="/profile.webp"
    alt="image user profile"
    placeholder="blur"
    blurDataURL="/profile.webp"
    style={{ objectFit: "cover" }}
    fill
    priority
  />
);

export { ImageEffectServer };
