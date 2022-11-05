import Container from "./container";
import { EXAMPLE_PATH } from "@/lib/constants";
import SectionSeparator from "./section-separator";
import Link from "next/link";
import Image from "next/image";
import Copyright from "./copyright";

export default function Footer() {
  return (
    <>
      <SectionSeparator />
      <footer className="font-poppins border-t border-accent-2">
        <Container>
          <div className="py-10 flex justify-between flex-row items-start">
            <Link href={"/"}>
              <Image
                src="/logo.svg"
                width={285.75}
                height={125}
                alt="Hack This Fall Logo"
                className="mr-1"
              ></Image>
            </Link>
            <div className="flex flex-col">
              <h4 className="font-semibold text-xl">About</h4>
              <Link
                className="font-normal text-lg mt-3 text-black hover:text-dark-orange duration-300 ease-out"
                href="/"
              >
                Hackathon
              </Link>
              <Link
                className="font-normal text-lg mt-2 text-black hover:text-dark-orange duration-300 ease-out"
                href="/"
              >
                Events
              </Link>
              <Link
                className="font-normal text-lg mt-2 text-black hover:text-dark-orange duration-300 ease-out"
                href="/"
              >
                Team
              </Link>
            </div>

            <div className="flex flex-col">
              <h4 className="font-semibold text-xl">Explore</h4>
              <Link
                className="font-normal text-lg mt-3 text-black hover:text-dark-orange duration-300 ease-out"
                href="/"
              >
                Dev.to
              </Link>
              <Link
                className="font-normal text-lg mt-2 text-black hover:text-dark-orange duration-300 ease-out"
                href="/"
              >
                Swags
              </Link>
              <Link
                className="font-normal text-lg mt-2 text-black hover:text-dark-orange duration-300 ease-out"
                href="/"
              >
                Community
              </Link>
            </div>

            <div className="flex flex-col">
              <h4 className="font-semibold text-xl">Find us online</h4>
              <div className="grid grid-cols-3 gap-x-4 gap-y-2 mt-3">
                <Link
                  href="/"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/twitter.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    className="mr-1"
                    alt="twitter"
                  ></Image>
                </Link>
                <Link
                  href="/"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/discord.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    className="mr-1"
                    alt="youtube"
                  ></Image>
                </Link>
                <Link
                  href="/"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/instagram.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    className="mr-1"
                    alt="instagram"
                  ></Image>
                </Link>
                <Link
                  href="/"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/youtube.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    className="mr-1"
                  ></Image>
                </Link>
                <Link
                  href="/"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/mail.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    className="mr-1"
                  ></Image>
                </Link>
                <Link
                  href="/"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/linkedin.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    className="mr-1"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <SectionSeparator />
        <Copyright />
      </footer>
    </>
  );
}
