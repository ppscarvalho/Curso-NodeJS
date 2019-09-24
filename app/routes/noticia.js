module.exports = function(app) {
    app.get("/noticia", function(req, res) {
      var conn = app.config.dbConnection();
      var noticiasModel = new app.app.models.NoticiaDAO(conn);
      noticiasModel.getNoticiaById(function(error, result) {
        res.render("noticias/noticia", { noticia: result });
      });
    });
  };
  