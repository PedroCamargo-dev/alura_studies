import { ITarefa } from "../../../types/ITarefa"
import style from "../List.module.scss"

export default function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa) {
    console.log({ tarefa, tempo, selecionado, completado, id })
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

