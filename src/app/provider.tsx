'use client'
import { ReactNode } from "react";
import React, {useState} from 'react';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {StoreStateContextProvider} from './lib/context/storeContext'
interface ProviderProps {
  children: ReactNode;
}

const Provider=({children}:ProviderProps)=>{
    const [client]=useState(new QueryClient());
    return(<>
    <StoreStateContextProvider>
        <QueryClientProvider client={client} >
            <ReactQueryStreamedHydration>
            {children}
            </ReactQueryStreamedHydration>

        </QueryClientProvider>

    </StoreStateContextProvider>
   
    </>)
}

export {Provider}