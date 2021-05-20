const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodypaser = require('body-parser');
const cors = require('cors');

const app = express();
dotenv.config({
    path: './config/config.env'
})

//Usar el body-parser

app.use(bodypaser.json())
if(process.env.NODE_ENV ==='development'){
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))

    app.use(morgan('dev'))
}



//Cargando las rutas
const authRouter = require('./routes/auth.route')
//Usar las rutas
app.use('/api/',authRouter);

app.use((req,res,next)=>{
    res.status(400).json({
        success: false,
        message: "Pagina no encontrada"
    })
});


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Escuchando por el puerto ${PORT}`)
});


