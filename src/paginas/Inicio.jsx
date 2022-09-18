import { useState, useEffect } from 'react'

const Inicio = () => {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = 'http://localhost:3000/clientes'

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
    }

    obtenerClientesAPI()
  }, [])


  return (
    <div>Inicio</div>
  )
}

export default Inicio