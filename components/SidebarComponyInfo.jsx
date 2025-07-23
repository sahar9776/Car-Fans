import { ShowInfoContext } from "@/context/ShowInfoContext";
import Image from "next/image";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";

function SidebarComponyInfo() {
  const { isOpen, setIsOpen, info } = useContext(ShowInfoContext);
  const { name, Headquarters, description, imageBrand, CEO } = info;
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } w-full h-full mx-auto absolute top-0 left-0 bg-primary py-10`}
    >
      <div className="relative w-full lg:w-[80%] h-auto mx-auto bg-white rounded-md p-10">
        {/* close button  */}
        <button
          className="absolute top-3 lg:top-4 right-3 lg:right-4"
          onClick={() => setIsOpen(false)}
        >
          <IoClose className="text-3xl text-accent hover:text-accent-hover" />
        </button>
        {/* info  */}
        <div className="w-full h-full flex flex-col-reverse lg:flex-row lg:gap-10 items-start lg:items-center">
          {/* brand and description  */}
          <div className="w-full lg:max-w-[65%] h-auto">
            {/* brand  */}
            <h3 className="h3 text-primary">{name}</h3>
            {/* CEO and Headquarters */}
            <ul className="my-3">
              <li className="text-primary font-semibold">
                <span className="text-4xl">.</span>
                CEO : {CEO}
              </li>
              <li className="text-primary font-semibold">
                <span className="text-4xl">.</span>
                Headquarters : {Headquarters}
              </li>
            </ul>
            {/* description  */}
            <p className="text-primary/80">{description}</p>
          </div>
          {/* image brand  */}
          <div className="w-full lg:max-w-[35%] h-auto mb-5 lg:mb-0 border-b-2 border-r-2
           border-accent rounded-md">
            <Image
              src={imageBrand}
              alt={name}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponyInfo;
