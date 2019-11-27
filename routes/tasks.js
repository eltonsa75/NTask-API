module.exports = app => {
    const Tasks = app.db.models.Tasks;

    app.route("/tasks")
        .all((req, res, next) => {
        delete req.body.id;
        next();
    })
        .get((req, res) => {
            Tasks.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    })
        .post((req, res) => {
            Tasks.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
    app.route("/tasks/:id")
        .all((req, res, next) => {
            // Middleware de pré-execução das rotas
            delete req.body.id;
            next();
        })
        .get((req, res, next) => {
            // "/tasks/1": consulta uma tarefa  
            delete req.body.id;
            next();
        })
        .put((req, res, next) => {
            // "/tasks/1": Atualiza uma tarefa
            delete req.body.id;
            next();
        })
        .delete((req, res, next) => {
            // "/tasks/1": Excluir uma tarefa
            delete req.body.id
            next();
        });
};

