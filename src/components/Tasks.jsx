import React from "react";
import Task from "./Task";

const Tasks = ({ tarefas, taskcompleted , removertarefas}) => {
  return (
    <>
      {tarefas.map((tarefas) => (
        <Task 
        key = {tarefas.id}
        task={tarefas} 
        taskcompleted={taskcompleted} 
        removertarefas={removertarefas} />
      ))}
    </>
  );
};

export default Tasks;
