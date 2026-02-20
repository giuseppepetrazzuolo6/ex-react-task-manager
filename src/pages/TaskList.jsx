import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRaw from "../components/TaskRaw"

export default function TaskList() {
    const { tasks } = useContext(GlobalContext)

    return (
        <div className="container">
            <h3>Qui ci sono le tasks...</h3>
            <table className="task-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <TaskRaw key={task.id} task={task} />
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}