import Image from "next/legacy/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8">
      <Link href={"/"}>
        <Image src="/logo.svg" width={128} height={56} className="mr-1"></Image>
      </Link>
      <button className="bg-dark-orange hover:bg-dull-orange duration-300 ease-out flex flex-row items-start px-4 py-3 rounded-xl">
        <Image
          src="/discord.svg"
          width={25}
          height={25}
          className="mr-1"
        ></Image>{" "}
        <span className="text-white ml-3 font-poppins font-bold text-base">
          Join Discord
        </span>
      </button>
    </section>
  );
}
