var express = require('express');
var router = express.Router();


var userDb = require('../models/usuario');

/* GET users listing. */
router.get('/', (req, res) => {
  let Datos = userDb.getAllUsuario((err, datos) => {
    res.status(200).json({ Users: datos });
    console.log(datos);
  });
});

module.exports = router;
