var app = require('./config/server');
//var rotaHome = require('./app/routes/home')(app);
//var rotaNoticia = require('./app/routes/noticias')(app);
//var rotaNoticiaInclusao = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function(){
    console.log('Servidor executando');
});
