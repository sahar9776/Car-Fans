"use client";

import { createContext, useState, useEffect } from "react";

export const CodesContext = createContext();

function CodesProvider({ children }) {
    const [codes, setCodes] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8000/codes");
            const data = await response.json();
            setCodes(data);
        }
        fetchData();
    }, []);
    return <CodesContext.Provider value={{ codes }}>{children}</CodesContext.Provider>
}
export default CodesProvider;