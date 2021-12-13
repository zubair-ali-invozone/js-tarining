import '../css/custom.css';

function Model(props) {
    return (
        <div className="model">
            <h2>Are you sure?</h2>
            <button onClick={props.onNo}>No</button>
            <button>Yes</button>
        </div>
    )
}

export default Model;