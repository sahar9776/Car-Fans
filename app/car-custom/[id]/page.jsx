"use client";

import { ListOfCarsContext } from "@/context/ListOfCarsContext";
import { useContext, use } from "react";
import { motion } from "framer-motion";
import CustomOrder from "@/components/CustomOrder";

function CarCustomization(props) {
  const params = use(props.params);
  const { id } = params;
  const { carsInfo,carName } = useContext(ListOfCarsContext);
  const filterCar = carsInfo.filter((item) => item.id === id);

  return (
    <div className="w-full py-0 lg:py-48">
      <div className="w-full h-[400px] mx-auto bg-transparent lg:bg-pink-50/20">
        <div className="container max-auto relative">
          {filterCar.map((item) => (
            <div key={item.id}>
              <motion.img
                initial={{ y: "-100vh" }}
                animate={{ y: "0" }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                  ease: "easeInOut",
                }}
                src={item.image}
                alt=""
                className="w-full lg:w-[50%] h-auto absolute top-0 lg:-top-36 left-0 lg:left-0 rounded-md shadow-md shadow-slate-500"
              />
              <motion.img
                initial={{ y: "100vh" }}
                animate={{ y: "0" }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                  ease: "easeInOut",
                }}
                src="https://t3.ftcdn.net/jpg/09/30/16/94/360_F_930169493_sk0FPnZLOAywUjQq9gaNeUUE1JH2aUpQ.jpg"
                alt={carName}
                className="w-[40%] h-auto absolute top-48 right-0 rounded-md shadow-md shadow-slate-500"
              />
              <motion.h2
                initial={{ x: "100vw" }}
                animate={{ x: "0" }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="h2 max-w-full mt-20 lg:mt-5 text-center absolute top-0 lg:-top-36 left-0 lg:left-[45%]"
              >
                {item.carName}
              </motion.h2>
            </div>
          ))}
        </div>
      </div>

      {/* custom order  */}
      <CustomOrder />
    </div>
  );
}

export default CarCustomization;
