import { useState } from 'react'
import './campotexto.css'
const CampoTexto = (props)=>{

const[valor,setValor] = useState('')


    const aoDigitar=(e)=>{
      props.Alterado(e.target.value)
        }

    

return(

    <div className="campo-texto">
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitar}  required={props.obrigatorio}placeholder={props.placeholder} />

    </div>



)



}

export default CampoTexto