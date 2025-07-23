"use client";

import ComponyItem from "@/components/ComponyItem";
import SidebarComponyInfo from "@/components/SidebarComponyInfo";
import { ComponiesContext } from "@/context/ComponiesContext";
import { useContext } from "react";

function Componies() {
  const { componies } = useContext(ComponiesContext);
  return (
    <div className="w-full py-8 relative">
      <div className="container mx-auto">
        {/* text  */}
        <div className="text-center xl:text-left">
          <h2 className="h2 mb-6">
            10 world is biggest car companies in 2024{" "}
          </h2>
          <p className="mb-9 text-white/80">
            Ready to explore the world is biggest car companies? From Tesla and
            Toyota to Porsche and Ferrari, we are diving into their market
            values and key highlights
          </p>
        </div>
        {/* componies info  */}
        <div
          className="columns-1 gap-3 lg:gap-5 lg:columns-2 xl:columns-3"
        >
          {componies.map((compony) => (
            <div  key={compony.id}>
              <ComponyItem compony={compony} />
            </div>
          ))}
        </div>
      </div>
      <SidebarComponyInfo />
    </div>
  );
}

export default Componies;
