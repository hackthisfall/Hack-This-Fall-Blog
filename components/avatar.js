import Image from "next/legacy/image";

export default function Avatar({ picture }) {
  return (
    <div className="w-24 h-24 relative">
      <Image
        src={picture}
        layout="fill"
        className="rounded-full"
        alt="author"
      />
    </div>
  );
}
