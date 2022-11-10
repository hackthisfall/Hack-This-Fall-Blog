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
          <div className="py-10 flex justify-between flex-col md:flex-row items-center md:items-start">
            <Link href={"/"}>
              <Image
                src="/logo.svg"
                width={285.75}
                height={125}
                alt="Hack This Fall Logo"
                className="w-32 h-16 md:w-72 md:h-32"
              ></Image>
            </Link>
            <div className="flex flex-col mt-10 md:mt-0 items-center md:items-start">
              <h4 className="font-semibold text-xl">About</h4>
              <Link
                className="font-normal text-lg mt-3 text-black hover:text-dark-orange duration-300 ease-out"
                href="https://hackthisfall.tech/"
                target={"_blank"}
              >
                Hackathon
              </Link>
              <Link
                className="font-normal text-lg mt-2 text-black hover:text-dark-orange duration-300 ease-out"
                href="https://hackthisfall.tech/events"
                target={"_blank"}
              >
                Events
              </Link>
              <Link
                className="font-normal text-lg mt-2 text-black hover:text-dark-orange duration-300 ease-out"
                href="https://hackthisfall.tech/team"
                target={"_blank"}
              >
                Team
              </Link>
            </div>

            <div className="flex flex-col mt-10 md:mt-0 items-center md:items-start">
              <h4 className="font-semibold text-xl">Explore</h4>
              <Link
                className="font-normal text-lg mt-3 text-black hover:text-dark-orange duration-300 ease-out"
                href="https://dev.to/hackthisfall"
                target={"_blank"}
              >
                Dev.to
              </Link>
              <Link
                className="font-normal text-lg mt-2 text-black hover:text-dark-orange duration-300 ease-out"
                href="https://hackthisfall.tech/swag"
                target={"_blank"}
              >
                Swags
              </Link>
              <Link
                className="font-normal text-lg mt-2 text-black hover:text-dark-orange duration-300 ease-out"
                href="https://discord.hackthisfall.tech/"
                target={"_blank"}
              >
                Community
              </Link>
            </div>

            <div className="flex flex-col mt-10 md:mt-0 items-center md:items-start">
              <h4 className="font-semibold text-xl">Find us online</h4>
              <div className="grid grid-cols-3 gap-x-4 gap-y-2 mt-3">
                <Link
                  target={"_blank"}
                  href="https://twitter.com/hackthisfall/"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/twitter.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    alt="twitter"
                  ></Image>
                </Link>
                <Link
                  target={"_blank"}
                  href="https://discord.hackthisfall.tech/"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/discord.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    alt="youtube"
                  ></Image>
                </Link>
                <Link
                  target={"_blank"}
                  href="https://instagram.com/hackthisfall"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/instagram.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    alt="instagram"
                  ></Image>
                </Link>
                <Link
                  target={"_blank"}
                  href="https://www.youtube.com/channel/UCpdsmUIkLpfopjURSYF1gaA"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/youtube.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    alt="youtube"
                  ></Image>
                </Link>
                <Link
                  target={"_blank"}
                  href="mailto:contact@hackthisfall.tech"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/mail.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    alt="mail"
                  ></Image>
                </Link>
                <Link
                  target={"_blank"}
                  href="https://www.linkedin.com/company/hackthisfall/"
                  className="bg-black hover:bg-dark-orange duration-300 ease-out rounded-full basis-0 w-11 h-11 flex justify-center"
                >
                  <Image
                    src="/socials/linkedin.svg"
                    width={44}
                    height={44}
                    style={{ position: "absolute" }}
                    alt="linkedin"
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
