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

    function addTask() {
        console.log('new task')
    }
    function removeTask() {
        console.log('task rimossa')
    }
    function updateTask() {
        console.log('task aggiornata')
    }

    return {
        tasks, setTasks, addTask, removeTask, updateTask
    }

} 