import { useState, useRef } from "react"

const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~"

export default function AddTask() {
    const [title, setTitle] = useState('')
    const descriptionRef = useRef()
    const statusRef = useRef('To do')

    const isTitleValid = title.trim() === '' || [...title].some(c => symbols.includes(c))

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isTitleValid ||
            descriptionRef.current.value.trim() === '') {
            alert('Compila tutti i campi')
            return
        }
        console.log(`titolo task: ${title}
                descrizione task: ${descriptionRef.current.value}
                stato: ${statusRef.current.value}`)
    }

    return (
        <>
            <div className="container">
                <form className="mt-3" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Task name</label>
                        <input type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />
                        <span style={{ color: !isTitleValid ? 'green' : 'red' }}>
                            {!isTitleValid ? 'Titolo valido' : 'Titolo non valido (rimuovere campo vuoto o carattere speciale)'}
                        </span>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlTextarea1">Description task</label>
                        <textarea className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            ref={descriptionRef}
                        ></textarea>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlSelect1">Status</label>
                        <select className="form-control"
                            id="exampleFormControlSelect1"
                            ref={statusRef}>
                            <option>To do</option>
                            <option>Doing</option>
                            <option>Done</option>
                        </select>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary" type="submit">Aggiungi Task</button>
                    </div>
                </form>
            </div>
        </>
    )
}