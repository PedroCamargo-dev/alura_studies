import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import { Stopwatch } from "../components/Stopwatch";
import { ITarefa } from "../types/ITarefa";
import style from "./App.module.scss"

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Stopwatch />
    </div>
  );
}

export default App;
