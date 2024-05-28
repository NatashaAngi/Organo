import './formulario.css'
import CampoTexto from '../campoTexto/campotexto'
import Lista from '../lista/lista'
import Botao from '../botao/botao'
import { useState } from 'react'


const Formulario = (props)=>{



const [nome,setNome] = useState('')
const [cargo,setCargo] = useState('')
const [imagem,setImagem] = useState('')
const [time,setTime] = useState('')


const aoSalvar=(e)=>{e.preventDefault()
   props.aoColaboradorCadastrado({nome,cargo,imagem,time}) 
  
  setNome('')
  setCargo('')
  setImagem('')
  setTime('')

}


return(
<section className='formulario'>
    <form onSubmit={aoSalvar}>

      <h2>Preencha os dados para criar o card do colaborador</h2>

      <CampoTexto obrigatorio={true} label='Nome' placeholder="Digite o seu nome" valor={nome} Alterado={valor =>setNome(valor)}/>
      
      <CampoTexto  obrigatorio={true} label='Cargo'placeholder="Digite o cargo"
      valor={cargo} Alterado={valor =>setCargo(valor)}/>

      <CampoTexto  label='Imagem'placeholder="Digite o endereço da imagem" valor={imagem} Alterado={valor =>setImagem(valor)}/>

      <Lista  obrigatorio={true} label = "Times" itens = {props.times} valor={time} Alterado={valor =>setTime(valor)} />

      <Botao>Criar Card</Botao>
    </form>
</section>





)


}



export default Formulario