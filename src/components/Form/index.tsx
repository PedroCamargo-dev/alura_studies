import React, { useState } from "react"
import style from "./Form.module.scss"
import { v4 as uuidv4 } from "uuid"
import Button from "../Button";
import { ITarefa } from "../../types/ITarefa";

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
} 

export default function Form({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00")
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        setTarefa("");
        setTempo("00:00");
    }
    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    onChange={(evento) => setTempo(evento.target.value)}
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    onChange={(evento) => setTempo(evento.target.value)}
                    id="tempo"
                    value={tempo}
                    min="00:00:00"
                    required
                />
            </div>
            <Button texto="Adicionar" type="submit" />
        </form>
    )
}
