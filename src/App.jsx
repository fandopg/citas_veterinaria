import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaPacientes from "./components/ListaPacientes"

function App() {
  
  return (
    <div className="container mx-auto mt-20">
      <Header></Header>

      <div className="mt-12 md:flex">
        <Formulario></Formulario>
        <ListaPacientes></ListaPacientes>
      </div>
    </div>
  )
}

export default App