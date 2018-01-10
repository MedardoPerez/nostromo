var express = require('express');
var router = express.Router();

var userDb = require('../models/usuario');
var logEventos = require('../core/logEventos');


/* GET users listing. */
router.get('/', (req, res) => {
  let Datos = userDb.getAllUsuario((err, datos) => {
    res.status(200).json({ Users: datos });
    console.log(datos);
  });
});


router.get('/:id?', (req, res) =>
{
 let Usuario = userDb.getUsuarioById(req.params.id, (err, rest)=>
 {
   res.status(200).json({Usuario: rest});
 });  
});


router.post('/',(req,res)=>
{
let eventoPost = logPost(req, 'POST'); 

let bodyPost = ConstruirDatosPostUsuario(req.body, eventoPost);

console.log(eventoPost);
console.log(bodyPost);

 userDb.addUsuario(bodyPost,(err, count)=>
 {
   if(err){
     res.json(err);
   }
   else{
     res.json(req.body);
   }
 });  
});

function logPost(req, tipoMetodo) {
  if (tipoMetodo == 'POST') {
    let log = new Object();
    log.FechaTransaccion = new Date();
    log.DescripcionTransaccion = 'AppInsert';
    log.TipoTransaccion = 'Insert';
    log.ModificadoPor = req.body.Usuario;
    log.Activo = true;

    return log;
  }

  return null;
}


function ConstruirDatosPostUsuario(body, eventoPost) {
  var postBody = new Object();
    postBody.IdUsuario = body.Id;
    postBody.Nombre = body.Nombre;
    postBody.Apellido = body.Apellido;
    postBody.Correo = body.Correo;
    postBody.Password = body.Pass;
    postBody.Telefono = body.Telefono;
    postBody.Estado = body.Estado;
    postBody.Activo = eventoPost.Activo;
    postBody.FechaTransaccion = eventoPost.FechaTransaccion;
    postBody.DescripcionTransaccion = eventoPost.DescripcionTransaccion;
    postBody.TipoTransaccion = eventoPost.TipoTransaccion
    postBody.ModificadoPor = eventoPost.ModificadoPor

    return postBody;
}

module.exports = router;
