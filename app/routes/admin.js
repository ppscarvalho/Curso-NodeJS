const {check, validationResult} = require('express-validator/check');

module.exports = function(app) {
  app.get("/add_noticia", function(req, res) {
    res.render("admin/form_add_noticia");
  });

  app.post("/noticias/salvar", [
    check('titulo').not().isEmpty().withMessage('Título obrigatório'),
    check('data_noticia').not().isEmpty().withMessage('Data da Notícia é obrigatória').isISO8601('dd-mm-yyyy')

  ],function(req, res) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    var noticia = req.body;
    var conn = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiaDAO(conn);

    noticiasModel.salvarNoticia(noticia, function(error, result) {
     res.redirect('/noticias')
    });
  });
};
