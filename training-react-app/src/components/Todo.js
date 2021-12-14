import Model from "./Model";
import Backdrop from "./Backdrop";
import '../css/custom.css'
import {useState} from "react";
import todoData from '../data.js'

function Todo(props) {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [deleteValue, setDeleteValue] = useState(null);

    const deleteHandler = (index) => {
        setIsModelOpen(true);
        setDeleteValue(index);
        console.log(index);
    }
    const closeModal = () => {
        setIsModelOpen(false);
        setDeleteValue(null);
    }

    const deleteConfirm = () => {
        setIsModelOpen(false);
        todoData.splice(deleteValue,1);
    }

        return (
        <div>
            <div className="table-top">
                <table id="customers">

                    <tr>
                        <th>Sr.</th>
                        <th>Todos</th>
                        <th>Action</th>
                    </tr>
                    {todoData.map((todoDataMap, index) => (
                        <tr>
                            <td width="1">{index + 1}</td>
                            <td>{todoDataMap.title}</td>
                            <td width="300">
                                {/*<button className="save-btn">Edit</button>*/}
                                <button className="delete-btn" onClick={()=> deleteHandler(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    {todoData.length === 0 && (
                        <tr>
                            <td colSpan="3" align="center">No Record.</td>
                        </tr>
                    )}
                </table>
            </div>
            {isModelOpen && <Model onNo={closeModal} onYes={deleteConfirm}/>}
            {isModelOpen && <Backdrop onClick={closeModal}/>}
        </div>
    )
}

export default Todo;