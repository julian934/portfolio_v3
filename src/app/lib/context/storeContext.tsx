"use client";
import React, { createContext, useState, ReactNode, FC } from "react";

interface StoreContextType{
    navSet:(status:boolean | null | undefined)=>void;
    navStatus:boolean | undefined | null;
}

const initialContext:StoreContextType={
    navSet:()=>{},
    navStatus:null
}

export const StoreStateContext=createContext<StoreContextType>(initialContext);

interface StoreStateContextProviderProps {
    children:ReactNode;
}

export const StoreStateContextProvider:FC<StoreStateContextProviderProps>=({children})=>{
    const [navStatus,setNavStatus]=useState<boolean | null | undefined>(null);

    const navSet=(status:boolean | null | undefined)=>{
        //  setNavStatus(!status);
       // status!=undefined && status==false && setNavStatus(!status);
       // status!=undefined && status==true && setNavStatus(!status);
       if (status === false) {
         setNavStatus(true);
        } else if (status === true) {
          setNavStatus(false);
           }

    }
    return (
    <StoreStateContext.Provider 
    value={{
        navStatus,
        navSet
    }} >
        {children}
    </StoreStateContext.Provider>)
}
