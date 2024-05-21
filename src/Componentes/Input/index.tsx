import './Input.css'

interface Props {
    type: 'text' |'email' |'number'
    escrita: "Nome" | "E-mail" | "Telefone"
    texto: string
}

function Input({type,escrita,texto}:Props) {
return(
    <div>
    <input className="input" type={type} defaultValue={texto} placeholder={escrita} />
    </div>
)
}

export default Input