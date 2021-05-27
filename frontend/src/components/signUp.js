import axios from 'axios'
import React, { useState } from 'react'
import "./styles/Form.css"
import portada from "../img/portadaParaLogin.jpg"

export default function Registro() {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');

    const registrar = async() =>{
        const nuevoUsuario = {nombre, apellido, email, contrasena}
        const respuesta = await axios.post("http://localhost:4000/api", nuevoUsuario);
    }

    return (
         <div className="contenedor">
            <form>
                <p className="titulo">INGRESA TUS DATOS</p>
                <div>
                    <label for="nombre" className="etiqueta">Nombres</label>
                    <input type="text" className="input_caja" id="nombre" required placeholder="Ingresa aquí tus nombres" onChange=
                    {e=>setNombre(e.target.value)}/>
                </div>
                <div>
                    <label for="apellidos" className="etiqueta">Apellidos</label>
                    <input type="text" className="input_caja" id="apellidos" required placeholder="Ingresa aquí tus apellidos" onChange=
                    {e=>setApellido(e.target.value)}/>
                </div>
                <div>
                    <label for="email" className="etiqueta">Correo</label>
                    <input type="text" className="input_caja" id="correo"  required placeholder="usuario@unsa.edu.pe" onChange=
                    {e=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label for="contrasena" className="etiqueta">Contraseña</label>
                    <input type="password" className="input_caja" id="contrasena" required placeholder="●●●●●●●●●●" onChange=
                    {e=>setContrasena(e.target.value)}/>
                </div>
                <button type="submit" className="boton" onChange=
                    {registrar()}>Registrarse</button>
            </form>
        </div>
    )
}