import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ title, url, slug, isHeroPost = false }) {
  const image = (
    <Image
      width={700}
      height={800}
      alt={`Cover Image for ${title}`}
      src={url}
      // className={cn("shadow-small", {
      //   "hover:shadow-medium transition-shadow duration-200": slug,
      // })}
    />
  );
  return <div className="sm:mx-0">{image}</div>;
}
