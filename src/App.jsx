import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaPacientes from "./components/ListaPacientes"

function App() {
  
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  //Version del curso
  /* useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? []
      setPacientes(pacientesLS)
    }
    obtenerLS()
  },[]) */

  //Version de los comentarios que corrije el problema del Local Storage
  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem("pacientes"))
    pacientesLS?.length > 0 && setPacientes(pacientesLS)
  }, [])

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id != id)
    setPacientes(pacientesActualizados) 
  }

  return (
    <div className="container mx-auto mt-20">
      <Header></Header>

      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}></Formulario>
        <ListaPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}></ListaPacientes>
      </div>
    </div>
  )
}

export default App
