function NoticiasDAO(conn){
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._conn.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticiaById = function(callback){
    this._conn.query('select * from noticias where id_noticias = 1', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._conn.query('insert into noticias set ?', noticia, callback);
}

module.exports = function(){
    return NoticiasDAO;
}