import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostFooter({ title, coverImage, date, author }) {
  return (
    <>
      <div className="flex flex-row border items-center py-5 px-10 rounded-xl font-poppins text-black-accent">
        <div className="flex flex-row items-center grow">
          <div className="hidden md:block">
            <Avatar picture={author.content.picture} />
          </div>
          <div className="flex flex-col ml-3 font-medium">
            <span className="text-sm">Author:</span>
            <span className="text-xl">{author.name}</span>
            <span className="text-sm uppercase">
              {author.content.designation}, {author.content.company}{" "}
            </span>
          </div>
        </div>
        <div className="max-w-2xl mx-auto border-l pl-10 py-4">
          <div className="text-base font-medium">Posted on:</div>
          <div className="text-lg">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </>
  );
}
