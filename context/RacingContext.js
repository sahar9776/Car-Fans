"use client";

// http://localhost:8000/racing
import { createContext, useEffect, useState } from "react";

export const RacingContext = createContext();

function RacingProvider({ children }) {
    const [racingInformation, setRacingInformation] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8000/racing");
            const data = await response.json();
            setRacingInformation(data);
        }
        fetchData();
    }, [])
    return (
        <RacingContext.Provider value={{ racingInformation }}>{children}</RacingContext.Provider>
    )
}
export default RacingProvider;