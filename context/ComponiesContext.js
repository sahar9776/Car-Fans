"use client";

import { useEffect, useState, createContext } from "react";

export const ComponiesContext = createContext();

function ComponiesProvider({ children }) {
    const [componies, setComponies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8000/brands");
            const data = await response.json();
            setComponies(data);
        }
        fetchData();
    }, []);
    return <ComponiesContext.Provider value={{ componies }}>
        {children}
    </ComponiesContext.Provider>
}
export default ComponiesProvider;