import React from 'react';
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './css/custom.css'
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} exact={true}/>
                <Route path="/todo-list" element={<Todo/>} exact={true}/>
                <Route path="/add-todo" element={<AddTodo/>} exact={true}/>
            </Routes>
        </div>);
}

export default App;
