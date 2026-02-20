import { createContext, useState, useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL

export const GlobalContext = createContext()


export function GlobalProvider({ children }) {
    const [tasks, setTasks] = useState([])
    console.log(tasks)

    useEffect(() => {
        fetch(`${apiUrl}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error))

    }, [])

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    )

}