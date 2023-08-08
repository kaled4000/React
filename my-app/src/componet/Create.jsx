import React, { useState } from "react";

  function CreateArea(Props){

    const [note,SetNote] = useState({
      title:"",
      content:""
    })

    function handleChange(event){
     
      const {name,value} = event.target
     
      SetNote(prevnote => {
        return{
          ...prevnote,
          [name]:value
        }
      })
    }
    function SubmitNote(event){
      Props.onAdd(note)
      SetNote({
        title:"",
        content:""
      })
  
   event.preventDefault();
    }
    
    return (
      <div>
      <form>
        <input 
        name="title" 
        value={note.title} 
        placeholder="Title"
       onChange={handleChange} />
        <textarea 
        name="content"
        value={note.content} 
        placeholder="Take a note..."
         onChange={handleChange}
        rows="3" />
        <button onClick={SubmitNote}>Add</button>
      </form>
    </div>
  );
}


export default CreateArea;
