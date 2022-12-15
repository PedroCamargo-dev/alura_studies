import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss"

export function Stopwatch() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronometro</p>
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button texto="Começar!" />
        </div>
    )
}