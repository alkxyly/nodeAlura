const LivroDao = require('../../app/infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/livros', function(req, resp) {
        const livroDao = new LivroDao(db);
        livroDao.listaLivros()
            .then(livros => resp.marko(
                require('../views/livros/lista/lista.marko'), {
                    livros: livros
                }
            ))
            .catch(erro => console.log(erro));
    });

    app.get('/livros/form', function(req, resp) {
        resp.marko(require('../views/livros/form/form.marko'));
    });

    app.post('/livros', function(req, resp) {
        console.log(req.body);
        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
    });
}