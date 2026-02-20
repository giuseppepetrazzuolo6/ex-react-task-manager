import { NavLink } from "react-router-dom"

export default function NavBar() {

    return (
        <nav className="navbar">
            <div>
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                }>Tasks List</NavLink>
                <NavLink to='/newTAsk' className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                }>New Task</NavLink>
            </div>
        </nav>
    )
}