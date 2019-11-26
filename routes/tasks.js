module.exports = app => {
    const Tasks = app.db.models.Tasks;

    app.route("/tasks")
        .all((req, res, next) => {
        // Middleware de pré-execução das rotas
        delete req.body.id;
        next();
    })
        .get((req, res, next) => {
        // "/tasks": Lista tarefas
        delete req.body.id;
        next();
    })
        .post((req, res, next) => {
            // "/tasks": Cadastra uma nova tarefa
            delete req.body.id;
            next();
        });
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

