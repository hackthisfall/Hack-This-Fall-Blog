import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}) {
  return (
    <section>
      <Link href={`/posts/${slug}`} className="text-title">
        <div className="flex flex-row items-center border rounded-2xl overflow-hidden bg-white hover:bg-light-orange duration-300 ease-out cursor-pointer">
          <div className="max-h-max basis-1/2">
            <CoverImage
              title={title}
              url={coverImage}
              slug={`/posts/${slug}`}
              isHeroPost={true}
            />
          </div>
          <div className="flex flex-col mx-10 py-9 basis-1/2">
            <h3 className="mb-4  leading-tight font-poppins font-semibold text-2xl ">
              {title}
            </h3>
            <span className="text-base leading-relaxed font-poppins font-sm text-black-accent">
              {excerpt}
            </span>
            <div className="flex flex-row mt-10">
              {categories.map(({ name }) => (
                <div
                  key={name}
                  className="uppercase font-poppins font-semibold text-white bg-category rounded px-3 py-1 ml-3 first:ml-0"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
