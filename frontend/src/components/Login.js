import axios from 'axios'
import React, { useState } from 'react'
import "./Form.css"
import portada from "./portadaParaLogin.jpg"

export default function Login() {
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');

    const ingresar = async() =>{
        const usuario = {email, contrasena}
        const respuesta = await axios.post("http://localhost:4000/api", usuario);
    }

    return (
         <div className="contenedor">
            <form>
                <p className="titulo">BIENVENIDO DE NUEVO</p>
                <div>
                    <label for="email" className="etiqueta">Usuario</label>
                    <input type="text" className="input_caja" id="correo"  required placeholder="usuario@unsa.edu.pe" onChange=
                    {e=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label for="contrasena" className="etiqueta">Contraseña</label>
                    <input type="text" className="input_caja" id="contrasena" required placeholder="●●●●●●●●●●" onChange=
                    {e=>setContrasena(e.target.value)}/>
                </div>
                <img className="imagen" src={portada}></img>
                <button type="submit" className="boton">Registrarse</button>
            </form>
        </div>
    )
}