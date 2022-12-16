import React from "react"
import { ITarefa } from "../../types/ITarefa"
import Button from "../Button"
import style from "./Form.module.scss"
import { v4 as uuidv4 } from "uuid"

class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    addTarefa(event: React.FormEvent) {
        event.preventDefault()
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                { 
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        onChange={
                            event => {
                                this.setState({ ...this.state, tarefa: event.target.value })
                            }
                        }
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
                        id="tempo"
                        value={this.state.tempo}
                        onChange={
                            event => {
                                this.setState({ ...this.state, tempo: event.target.value })
                            }
                        }
                        name="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button texto="Adicionar" type="submit" />
            </form>
        )
    }
}

export default Form