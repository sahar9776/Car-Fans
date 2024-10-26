"use client";

import Link from "next/link";
import { BiSolidCustomize } from "react-icons/bi";

function CarItem({ car }) {
  const { id, image } = car;

  return (
    <div className="relative my-5 rounded-md">
      <img src={image} className="w-full h-auto rounded-md" />
      <Link
        href={`/car-custom/${id}`}
        className="w-[40px] h-[40px] rounded-full flex justify-center items-center absolute bottom-2 left-2 bg-transparent shadow-md shadow-accent/50"
      >
        <BiSolidCustomize className="text-xl" />
      </Link>
    </div>
  );
}

export default CarItem;
