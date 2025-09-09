'use client'

import React, {useState} from 'react';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {StoreStateContextProvider} from './lib/context/storeContext'


const Provider=({children}:any)=>{
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