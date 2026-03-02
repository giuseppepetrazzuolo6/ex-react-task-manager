import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import Modal from "../components/Modal"

export default function TaskDetails() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { tasks, removeTask } = useContext(GlobalContext)
    const [show, setShow] = useState(false)

    const task = tasks.find(t => String(t.id) === String(id))

    if (!task) {
        return <p>Loading...</p>
    }

    const handleDelete = async () => {
        try {
            await removeTask(id)
            alert('Task eliminata!')
            navigate('/')
        } catch (err) {
            alert(err.message)
        }

    }

    return (
        <>
            <div className="container">
                <h2>{task.title}</h2>
                <p><strong>Description : </strong>{task.description}</p>
                <p><strong>Status : </strong>{task.status}</p>
                <p><strong>Data di creazione : </strong>{task.createdAt}</p>
                <div>
                    <button className="btn btn-danger" onClick={() => setShow(true)}>Delete</button>
                </div>
            </div>
            <Modal
                title='Vuoi rimuovere la task?'
                show={show}
                content={<h3>task.title</h3>}
                onClose={() => setShow(false)}
                onConfirm={handleDelete}
            />

        </>
    )
}