"use client";

import CarItem from "@/components/CarItem";
import { ListOfCarsContext } from "@/context/ListOfCarsContext";
import React, { useContext } from "react";

function Cars() {
  const { carsInfo } = useContext(ListOfCarsContext);

  return (
    <div className="w-full py-8 relative over">
      <div className="container mx-auto">
        {/* text  */}
        <div className="text-center xl:text-left">
          <h2 className="h2 mb-6">The 25 Fastest Cars in the World, Ranked </h2>
          <p className="mb-9 text-white/80">
            Here is our updated list for 2024, because when marques compete for
            top-speed bragging rights, the world wins.
          </p>
        </div>
        {/* cars list  */}
        <div className="columns-1 gap-3 lg:gap-5 lg:columns-2 xl:columns-3">
          {carsInfo.map((car) => (
            <CarItem car={car} key={car.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cars;
