import {Link} from "react-router-dom";

function Navbar(props) {
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-todo">Add Todo</Link></li>
            <li><Link to="/todo-list">Todos List</Link></li>
        </ul>
    )
}

export default Navbar;