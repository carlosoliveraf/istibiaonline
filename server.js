var express = require('express'),
    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    app = express();
 
// Passo 1
app.get('/raspagem', function(req, res) {
    ...
})
 
app.listen('8081')
console.log('Executando raspagem de dados na porta 8081...');
exports = module.exports = app;