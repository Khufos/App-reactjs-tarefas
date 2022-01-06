import React from 'react';
import Button from "./Button";
import './Info.css'
import { useHistory, useParams } from 'react-router-dom';


const Info = () => {
    const params = useParams();
    const history = useHistory();

    const voltarbotao = ()=>{
        history.goBack();
    }
    return (  
        <> 
        <div className="back-button">
            <Button onClick={voltarbotao}>Voltar</Button>
        </div>
        <div className="task-info">
            <h2>{params.taskTitle}</h2>            
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
                minima eius magnam culpa sequi explicabo.
            </p>
        </div>
    </>
);
};
 
export default Info;