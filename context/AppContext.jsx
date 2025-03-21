"use client";

import { useUser } from "@clerk/nextjs";
import { createContext, useContext } from "react";


export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = ({Children}) => {
    const { user } = useUser()

    const value = {
        user
    }

    return <AppContext.Provider value={value}> {Children} </AppContext.Provider>
}