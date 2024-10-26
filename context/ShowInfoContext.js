"use client";

import { createContext, useState } from "react";

export const ShowInfoContext = createContext();

function ShowInfoProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [info, setInfo] = useState({});
    return <ShowInfoContext.Provider value={{ isOpen, setIsOpen, info, setInfo }}>
        {children}
    </ShowInfoContext.Provider>
}
export default ShowInfoProvider