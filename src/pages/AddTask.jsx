export default function AddTask() {

    return (
        <>
            <div className="container">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Task name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description task</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Statu</label>
                        <select class="form-control" id="exampleFormControlSelect1">
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