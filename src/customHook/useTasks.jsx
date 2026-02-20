import { useState, useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL

export default function useTasks() {
    const [tasks, setTasks] = useState([])
    console.log(tasks)

    useEffect(() => {
        fetch(`${apiUrl}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error))

    }, [])

    async function addTask({ title, description, status }) {
        try {
            const res = await fetch(`${apiUrl}/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, description, status }),
            })

            if (!res.ok) {
                throw new Error("Errore nella richiesta al server")
            }

            const data = await res.json()

            if (!data.success) {
                throw new Error(data.message)
            }
            setTasks(prev => [...prev, data.task])
            return data.task

        } catch (err) {
            console.error("Errore POST /tasks:", err)
            throw err
        }
    }

    function removeTask() {
        console.log('task rimossa')
    }
    function updateTask() {
        console.log('task aggiornata')
    }

    return {
        tasks, setTasks, addTask, removeTask, updateTask, apiUrl
    }

} 