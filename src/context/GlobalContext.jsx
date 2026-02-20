import { createContext } from "react";
import useTasks from "../customHook/useTasks";

export const GlobalContext = createContext()


export function GlobalProvider({ children }) {
    const { tasks, setTasks, addTask, removeTask, updateTask } = useTasks()


    return (
        <GlobalContext.Provider value={{ tasks, setTasks, addTask, removeTask, updateTask }}>
            {children}
        </GlobalContext.Provider>
    )

}