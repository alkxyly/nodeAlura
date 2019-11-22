const LivroDao = require('../../app/infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function(req, resp) {
        const livroDao = new LivroDao(db);
        livroDao.listaLivros()
            .then(livros => resp.marko(
                require('../views/livros/lista/lista.marko'), {
                    livros: livros
                }
            ))
            .catch(erro => console.log(erro));
    });
}