import React, { useState } from "react";

const CreateArea = (props) => {
    const [ addNotes, setAddNotes ] = useState({
        title:"",
        content: ""
    });

    const onHandleChange = (event) => {
        const { name, value } = event.target;
        
        setAddNotes(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    const submitNote = (event) => {
        props.onAdd(addNotes);
        setAddNotes({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    return <div>
        <form>
            <input 
            className="form-input" 
            name="title" 
            placeholder="Title" 
            type="text"
            value={addNotes.title}
            onChange={onHandleChange}    
            />
            <textarea 
            className="form-textarea" 
            name="content" 
            placeholder="Take a note..." 
            rows="3"
            value={addNotes.content}
            onChange={onHandleChange}
            >
            </textarea>
            <button onClick={submitNote}>Add</button>
        </form>
    </div>
}

export default CreateArea;