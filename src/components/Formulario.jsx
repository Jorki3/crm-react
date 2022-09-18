import React from 'react'
import { Formik, Form, Field, } from 'formik'
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario = () => {
    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(3, 'El nombres es muy corto')
            .required('El nombre es obligatorio'),
        empresa: Yup.string()
            .required('El nombre de la empresa es obligatorio'),
        email: Yup.string()
            .email('Email no valido')
            .required('El email es obligatorio'),
        telefono: Yup.number()
            .positive('El número no es válido')
            .integer('El número no es válido')
            .typeError('El número no es válido'),
    })

    const handleSubmit = async (values) => {
        try {
            const url = 'http://localhost:3000/clientes'

            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const resultado = await respuesta.json()
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md 
    md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: '',
                }}

                onSubmit={(values) => {
                    handleSubmit(values)
                }}

                validationSchema={nuevoClienteSchema}
            >

                {({ errors, touched }) => {
                    return (
                        <Form className='mt-10'>
                            <div className='mb-4'>
                                <label
                                    className='text-gray-800'
                                    htmlFor='nombre'
                                >Nombre: </label>

                                <Field
                                    id="nombre"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Nombre del cliente"
                                    name="nombre"
                                />

                                {errors.nombre && touched.nombre ? (
                                    <Alerta>{errors.nombre}</Alerta>
                                ) : null}
                            </div>

                            <div className='mb-4'>
                                <label
                                    className='text-gray-800'
                                    htmlFor='empresa'
                                >Empresa: </label>

                                <Field
                                    id="empresa"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Empresa del cliente"
                                    name="empresa"
                                />

                                {errors.empresa && touched.empresa ? (
                                    <Alerta>{errors.empresa}</Alerta>
                                ) : null}
                            </div>

                            <div className='mb-4'>
                                <label
                                    className='text-gray-800'
                                    htmlFor='email'
                                >Email: </label>

                                <Field
                                    id="email"
                                    type="email"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Email del cliente"
                                    name="email"
                                />

                                {errors.email && touched.email ? (
                                    <Alerta>{errors.email}</Alerta>
                                ) : null}
                            </div>

                            <div className='mb-4'>
                                <label
                                    className='text-gray-800'
                                    htmlFor='telefono'
                                >Teléfono: </label>

                                <Field
                                    id="telefono"
                                    type="tel"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Teléfono del cliente"
                                    name='telefono'
                                />

                                {errors.telefono && touched.telefono ? (
                                    <Alerta>{errors.telefono}</Alerta>
                                ) : null}
                            </div>

                            <div className='mb-4'>
                                <label
                                    className='text-gray-800'
                                    htmlFor='notas'
                                >Notas: </label>

                                <Field
                                    as="textarea"
                                    id="notas"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                    placeholder="Notas del cliente"
                                    name='notas'
                                />
                            </div>

                            <input
                                type='submit'
                                value="Agregar Cliente"
                                className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
                            />
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Formulario