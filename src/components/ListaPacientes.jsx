import Paciente from "./Paciente";

const ListaPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    
    return ( 
        <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">Administra tus {""}<span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
    
                {pacientes.map((paciente) => <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}></Paciente>)}
                </>
            ): (
                <>
                <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes desde el formulario {""}<span className="text-indigo-600 font-bold">y los veras en esta sección</span></p>
                </>
            )}       
        
        </div>
     );
}

export default ListaPacientes;