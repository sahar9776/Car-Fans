"use client";

import { ShowInfoContext } from "@/context/ShowInfoContext";
import Image from "next/image";
import { useContext } from "react";
import { FaInfo } from "react-icons/fa";

function ComponyItem({ compony }) {
  const { imageBrand,name } = compony;
  const { setIsOpen, setInfo } = useContext(ShowInfoContext);

  const changeInfo = (compony) => {
    setInfo(compony);
    setIsOpen(true);
  };

  return (
    <div className="relative my-5 rounded-md">
      <Image src={imageBrand} alt={name} className="w-full h-auto rounded-md" />
      <button
        onClick={() => changeInfo(compony)}
        className="w-[40px] h-[40px] rounded-full flex justify-center items-center absolute bottom-2 left-2 bg-transparent shadow-md shadow-accent/50"
      >
        <FaInfo className="text-xl" />
      </button>
    </div>
  );
}

export default ComponyItem;
