const PruebaCtrl={}
const Empleado=require("../models/prueba.model")

PruebaCtrl.obtener=(req,res)=>{
    res.send("funcionando desde get")
}

PruebaCtrl.crear=(req,res)=>{
    res.send("funcionando desde post")
}

PruebaCtrl.actualizar=(req,res)=>{
    res.send("guncionando desde put")
}

PruebaCtrl.eliminar=(req,res)=>{
    res.send("funcionando desde delete")
}

// PruebaCtrl.crear=async(req,res)=>{
//     const {nombre,apellido,salario}=req.body
//     const NuevoRegistro=new Empleado({
//         nombre,
//         apellido,
//         salario
//     })
//     await NuevoRegistro.save()
//     res.json({
//         mensaje:"Empleado guardado"
//     })
// }

module.exports=PruebaCtrl