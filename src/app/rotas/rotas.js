const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function(req, resp) {
        db.all('SELECT * FROM livros', function(erro, resultado) {
            resp.marko(
                require('../views/livros/lista/lista.marko'), {
                    livros: resultado
                }
            );

        });

    });
}