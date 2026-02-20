export default function AddTask() {

    return (
        <>
            <div className="container">
                <form className="mt-3">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Task name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlTextarea1">Description task</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlSelect1">Status</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>To do</option>
                            <option>Doing</option>
                            <option>Done</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
}