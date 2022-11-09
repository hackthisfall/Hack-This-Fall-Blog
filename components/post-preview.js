import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}) {
  return (
    <Link href={`/${slug}`}>
      <div className="border rounded-xl overflow-hidden bg-white hover:bg-light-orange duration-300 ease-out cursor-pointer">
        <div>
          <CoverImage slug={`/${slug}`} title={title} url={coverImage} />
        </div>
        <div className="px-5 font-poppins pt-5 pb-7">
          <h3 className="font-semibold text-lg leading-snug text-title">
            {title}
          </h3>
          <div className="flex flex-row mt-5">
            {categories.map(({ name }) => (
              <div
                key={name}
                className="uppercase font-poppins font-semibold text-white text-sm bg-category rounded px-2 py-1 ml-3 first:ml-0"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
