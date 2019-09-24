module.exports = function(app) {
  app.get("/noticias", function(req, res) {
    var conn = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiaDAO(conn);

    noticiasModel.getNoticias(function(error, result) {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
