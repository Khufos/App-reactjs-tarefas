import React from 'react';
import './Task.css'
import  {CgClose, CgInfo} from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

const Task = ({task, taskcompleted , removertarefas}) => {
    const history = useHistory();
    const taskinfo = () =>{
        history.push(`/${task.title}`);
    }


    return ( 
        <div className='task-container' style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
        <div className='task-title' onClick={()=>taskcompleted(task.id)}>
           {task.title}
        </div>
        <div className='buttons-container'>
               <button className='button-remove-task' onClick={()=>removertarefas(task.id)}><CgClose/></button>
               <button className='add-task-info' onClick={taskinfo}><CgInfo/></button>


        </div>  
           
        </div>
        
        
    );
}
 
export default Task;