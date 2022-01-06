import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";
const AddTask = ({adicioandoTarefas}) => {
  const [getinput, setGetinput] = useState("");

  const inputChange = (e) => {
    //aqui voce pega o que está escrito no input
    setGetinput(e.target.value);
  };
  const taskclick = () =>{
    adicioandoTarefas(getinput)
    setGetinput('')
  }
  return (
    <div className="add-task-container">
      <input 
        onChange={inputChange}
        className="add-task-input"
        value={getinput}
        type="text"
      />
      <div className="add-buttton-container">
        <Button onClick={taskclick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
