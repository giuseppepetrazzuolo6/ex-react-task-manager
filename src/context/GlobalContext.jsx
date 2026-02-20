import { createContext } from "react";
import useTasks from "../customHook/useTasks";

export const GlobalContext = createContext()


export function GlobalProvider({ children }) {
    const taskState = useTasks()



    return (
        <GlobalContext.Provider value={taskState}>
            {children}
        </GlobalContext.Provider>
    )

}