import React from "react";

const Note = (props) => {
    return <div className="note">
        <h1 className="note-h1">{props.title}</h1>
        <p className="note-p">{props.content}</p>
        <button onClick={() => {
            props.onCheck(props.id);
        }}>DELETE</button>
    </div>
}

export default Note;