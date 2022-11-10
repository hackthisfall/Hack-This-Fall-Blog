import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import Image from "next/image";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

export default function PostHeader({ title, categories }) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const copyText = async (text) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text);
    } else {
      document.execCommand("copy", true, text);
    }
    enqueueSnackbar("Link copied to clipboard", {
      autoHideDuration: 1500,
    });
  };

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex flex-col md:flex-row justify-between items-center mt-5">
        <div className="flex flex-row">
          {categories.map(({ name }) => (
            <div
              key={name}
              className="uppercase font-poppins font-semibold text-white text-sm bg-category rounded px-2 py-1 ml-3 first:ml-0"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center font-poppins text-black-accent font-semibold text-sm mt-5 md:mt-0">
          <span>Share:</span>
          <Link
            href={`https://twitter.com/intent/tweet?text=${origin}${router.asPath}`}
            target={"_blank"}
            className="ml-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.877"
              height="18.616"
              viewBox="0 0 22.877 18.616"
              className="fill-share-dull hover:fill-dark-orange duration-300 ease-out"
            >
              <g
                id="Icon_ionic-logo-twitter"
                data-name="Icon ionic-logo-twitter"
                transform="translate(0)"
              >
                <path
                  id="Icon_ionic-logo-twitter-2"
                  data-name="Icon ionic-logo-twitter"
                  d="M24.291,6.706a9.489,9.489,0,0,1-2.7.742,4.71,4.71,0,0,0,2.065-2.6,9.326,9.326,0,0,1-2.981,1.139A4.692,4.692,0,0,0,12.559,9.2a4.6,4.6,0,0,0,.121,1.071A13.3,13.3,0,0,1,3,5.358a4.7,4.7,0,0,0,1.459,6.273,4.584,4.584,0,0,1-2.133-.587V11.1A4.7,4.7,0,0,0,6.1,15.708a4.725,4.725,0,0,1-1.236.165,4.428,4.428,0,0,1-.882-.087,4.7,4.7,0,0,0,4.387,3.263,9.41,9.41,0,0,1-5.832,2.012,9.514,9.514,0,0,1-1.12-.068A13.119,13.119,0,0,0,8.6,23.116,13.275,13.275,0,0,0,21.964,9.745c0-.2,0-.407-.015-.606A9.554,9.554,0,0,0,24.291,6.706Z"
                  transform="translate(-1.413 -4.5)"
                />
              </g>
            </svg>
          </Link>
          <Link
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${origin}${router.asPath}`}
            target={"_blank"}
            className="ml-4"
          >
            <svg
              id="Icon_awesome-linkedin"
              data-name="Icon awesome-linkedin"
              xmlns="http://www.w3.org/2000/svg"
              width="21.719"
              height="21.719"
              viewBox="0 0 21.719 21.719"
              className="fill-share-dull hover:fill-dark-orange duration-300 ease-out"
            >
              <path
                id="Icon_awesome-linkedin-2"
                data-name="Icon awesome-linkedin"
                d="M20.167,2.25H1.546A1.558,1.558,0,0,0,0,3.816V22.4a1.558,1.558,0,0,0,1.546,1.566H20.167A1.562,1.562,0,0,0,21.719,22.4V3.816A1.562,1.562,0,0,0,20.167,2.25ZM6.564,20.866H3.345V10.5H6.569V20.866ZM4.955,9.086A1.866,1.866,0,1,1,6.821,7.219,1.867,1.867,0,0,1,4.955,9.086Zm13.676,11.78H15.412V15.824c0-1.2-.024-2.749-1.673-2.749-1.677,0-1.934,1.309-1.934,2.662v5.129H8.586V10.5h3.088v1.416h.044a3.391,3.391,0,0,1,3.049-1.673c3.258,0,3.864,2.148,3.864,4.94Z"
                transform="translate(0 -2.25)"
              />
            </svg>
          </Link>
          <button
            className="ml-4"
            onClick={() => copyText(`${origin}${router.asPath}`)}
          >
            <svg
              id="Icon_metro-link"
              data-name="Icon metro-link"
              xmlns="http://www.w3.org/2000/svg"
              width="21.714"
              height="21.719"
              viewBox="0 0 21.714 21.719"
              className="fill-share-dull hover:fill-dark-orange duration-300 ease-out"
            >
              <path
                id="Icon_metro-link-2"
                data-name="Icon metro-link"
                d="M12.234,15.837a1.126,1.126,0,0,1-.8-.331,5.305,5.305,0,0,1,0-7.494l4.17-4.17A5.3,5.3,0,1,1,23.1,11.336l-1.906,1.906a1.129,1.129,0,0,1-1.6-1.6L21.5,9.739a3.041,3.041,0,0,0-4.3-4.3l-4.17,4.17a3.044,3.044,0,0,0,0,4.3,1.129,1.129,0,0,1-.8,1.928Zm-4,8.171a5.3,5.3,0,0,1-3.747-9.047l1.906-1.906a1.129,1.129,0,1,1,1.6,1.6L6.082,16.559a3.041,3.041,0,0,0,4.3,4.3l4.17-4.17a3.044,3.044,0,0,0,0-4.3,1.129,1.129,0,1,1,1.6-1.6,5.306,5.306,0,0,1,0,7.494l-4.17,4.17a5.265,5.265,0,0,1-3.747,1.552Z"
                transform="translate(-2.936 -2.29)"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
