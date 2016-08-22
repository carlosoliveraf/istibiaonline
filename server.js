var express = require('express'),
    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    app = express();


app.get('/oficial2', function(req, res) {

  request('https://secure.tibia.com/community/?subtopic=worlds&world=Veludera', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
                var resultado = [];

    $('.InnerTableContainer tr:not(:first-child)').each(function(i, element){
      

            var name = $(this).find('td').eq(0).text().trim(),
                    level = $(this).find('td').eq(1).text().trim(),
                    vocation = $(this).find('td').eq(2).text().trim();
                // Inserindo os dados num array
                resultado.push({
                    name: name,
                    level: level,
                    vocation: vocation
                });


    });
        res.json(resultado);
  }
});
})


// Execução do serviço
app.set('port', (process.env.PORT || 5000));

//app.listen('8081')
//console.log('Listening on port 8081...');
exports = module.exports = app;