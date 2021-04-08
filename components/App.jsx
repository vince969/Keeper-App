import React, { useState } from "react";
import "style.css";
import Header from "../components/Header";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import Footer from "../components/Footer";

const App = () => {

    const [ notes, setNotes ] = useState([]);

    const addingNotes = (newNote) => {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return <div>
        <Header />
        <CreateArea onAdd={addingNotes}/>
        {notes.map((note, index)=> {
           return <Note 
            key={index}
            id={index} 
            title={note.title} 
            content={note.content} 
            onCheck={deleteNote}    
            />
        })}
        <Footer />
    </div>
}

export default App;