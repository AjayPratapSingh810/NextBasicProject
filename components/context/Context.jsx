"use client"

import { createContext, useState } from "react"
import { Toaster } from "react-hot-toast";

const Context = createContext({
    user:{},
})

export const ContextProvider = ({children})=>{
    const [user,setUser] = useState({});
    return <Context.Provider value={{user,setUser}}>
        {children}
        <Toaster/>
    </Context.Provider>
}

export default Context;