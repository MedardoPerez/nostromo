
 function logPost(req, tipoMetodo) {
    if(tipoMetodo == 'POST')
    {
          let log = new Object();
          log.FechaTransaccion = new Date();
          log.DescripcionTransaccion = 'AppInsert';
          log.TipoTransaccion = 'Insert';
          log.ModificadoPor = req.Usuario;
          log.Activo = true;

          return log;
    }

    return null;
}

module.logPost = logPost;