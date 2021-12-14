import {useState} from "react";
import '../css/custom.css'
import todoData from '../data.js'

function AddTodo(props) {
    const [todo, setTodo] = useState("");
    const [todoMsg, setTodoMsg] = useState(false);

    const saveTodo = () => {
        if (todo != "") {
            todoData.push({
                title: todo
            });
            setTodoMsg(true);
        } else {
            alert("Title is required.");
        }
    }

    return (
        <div className="align-center">
            <h2 className="new-todo">Add New Todo</h2>
            <div>
                <label className="">Title</label>
                <br/>
                <textarea cols="30" rows="10" onChange={(e)=> setTodo(e.target.value)}></textarea>
                <br/>
                <button className="save-btn" onClick={saveTodo}>Save</button>
            </div>
            {todoMsg && (
                <div className="todo-msg"><span>Data Saved Successfully.</span></div>
            )}
        </div>
    )
}

export default AddTodo;