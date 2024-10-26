"use client";

import { createContext, useEffect, useState } from "react";

export const ListOfCarsContext = createContext();

function ListOfCarsProvider({ children }) {
    const [carsInfo, setCarsInfo] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8000/cars")
            const data = await response.json();
            setCarsInfo(data);
        }
        fetchData();
    }, [])

    return (
        <ListOfCarsContext.Provider value={{ carsInfo }}>{children}</ListOfCarsContext.Provider>
    )
}
export default ListOfCarsProvider