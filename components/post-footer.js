import Avatar from "./avatar";
import Date from "./date";
import SectionSeparator from "./section-separator";

export default function PostFooter({ date, author }) {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row border items-start md:items-center px-5 py-3 md:py-5 md:px-10 rounded-xl font-poppins text-black-accent">
        <div className="flex flex-row items-center grow mt-4 md:mt-0">
          <div>
            <Avatar picture={author.content.picture} />
          </div>
          <div className="flex flex-col ml-3 font-medium">
            <span className="text-sm">Author:</span>
            <span className="text-lg md:text-xl">{author.name}</span>
            <span className="text-sm ">
              {author.content.designation}, {author.content.company}{" "}
            </span>
          </div>
        </div>
        <div className="max-w-2xl mx-auto border-l pl-10 py-4 hidden md:block">
          <div className="text-base font-medium">Posted on :</div>
          <Date dateString={date} />
        </div>
        <div className="md:hidden w-full">
          <div className="max-w-full w-full border-none md:border-l pt-2 pb-4 flex flex-row items-center grow justify-start ">
            <div className="text-base font-medium mr-1">Posted on :</div>
            <div className="text-lg ">
              <Date dateString={date} />
            </div>
          </div>
          <SectionSeparator />
        </div>
      </div>
    </>
  );
}
