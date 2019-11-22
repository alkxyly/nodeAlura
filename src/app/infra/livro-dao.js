class LivroDao {

    constructor(db) {
        this._db = db;
    }

    listaLivros() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) return reject('Não possível listar os livros !');

                    return resolve(resultados);
                }
            )
        });
    }
}

module.exports = LivroDao;