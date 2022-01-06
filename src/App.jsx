import React, { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Info from "./components/Info";
import axios from "axios";

import Header from "./components/Header";

const App = () => {
  const [tarefas, setTarefas] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: true,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: false,
    },
  ]);

  // Hook para usar API DO AXIOS NO reactjs
  useEffect(() => {
    const fetchts = async () => {
      const {data} = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      );
      setTarefas(data)
    };

    fetchts();
  }, []);

  const taskcompleted = (taskid) => {
    const newCompleted = tarefas.map((task) => {
      if (task.id === taskid) return { ...task, completed: !task.completed };
      return task;
    });
    setTarefas(newCompleted);
  };
  // Aqui é o script para adicionar as tarefas
  const adicioandoTarefas = (taskTitle) => {
    const newTarefas = [
      ...tarefas,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTarefas(newTarefas);
  };
  //Aqui é o script para remover as tarefas
  const removertarefas = (taskid) => {
    const newremove = tarefas.filter((task) => task.id !== taskid);
    setTarefas(newremove);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask adicioandoTarefas={adicioandoTarefas} />
              <Tasks
                tarefas={tarefas}
                taskcompleted={taskcompleted}
                removertarefas={removertarefas}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={Info} />
      </div>
    </Router>
  );
};

export default App;
