import Todo from "./components/Todo";
import './css/custom.css'

function App() {
    return (
        <div className="App">
            <div className="align-center">
                <h1>My Todos</h1>
                <Todo topic="React Components"/>
                <Todo topic="React Props"/>
                <Todo topic="React States"/>
                <Todo topic="React Routing"/>
            </div>
        </div>);
}

export default App;
