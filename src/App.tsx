import './App.css'
import ButtonFatec from './Componentes/ButtonFatec'
import Input from './Componentes/Input/index.tsx'


function App() {
 
  return (
    <>
    <Input type="text" escrita="Nome" texto=''/>
    <Input type="email" escrita="E-mail" texto='@email.com'/>
    <Input type="text" escrita="Telefone" texto=''/>
    <hr />
    <ButtonFatec label="Botão 2" type="button"/>

    </>
  )
}

export default App
