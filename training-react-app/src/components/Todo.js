import Model from "./Model";
import Backdrop from "./Backdrop";
import '../css/custom.css'
import {useState} from "react";

function Todo(props) {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const deleteHandler = () => {
        setIsModelOpen(true);
    }
    const closeModal = () => {
        setIsModelOpen(false);
    }

    return (
        <div>
            <div className="todo-main">
                <h2>{props.topic}</h2>
                <button className="delete-btn" onClick={deleteHandler}>Delete</button>
            </div>
            {isModelOpen && <Model onNo={closeModal}/>}
            {isModelOpen && <Backdrop onClick={closeModal}/>}
        </div>
    )
}

export default Todo;