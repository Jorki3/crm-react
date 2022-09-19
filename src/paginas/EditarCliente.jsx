import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Formulario from '../components/Formulario'

const EditarCliente = () => {
  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)

  const { id } = useParams();

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:3000/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        setCargando(!cargando)
      }, 1000)
    }

    obtenerClienteAPI()
  }, [])

  return (
    <div>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>Utiliza este formulario para editar datos del cliente</p>

      {cliente?.nombre ? (
        <Formulario
          cliente={cliente}
          cargando={cargando}
        />
      ) :
        <p>Cliente ID no valido</p>
      }
    </div>
  )
}

export default EditarCliente