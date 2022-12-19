import React from "react"
import style from "./Button.module.scss"

interface Props {
    texto: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Button({ texto, type, onClick }: Props) {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={style.button}
        >
            {texto}
        </button>
    )
}

export default Button