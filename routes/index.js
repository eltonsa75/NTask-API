module.exports = app => {
    app.get("/", (req, res) => {
        res.json({status: "NTask API"});
    });
};

module .exports = app => {
    app.get("/tasks", (req, res) => {
        res.json({
            task: [
                {title: "Fazer compras"},
                {title: "Consertar o pc"},
            ]
        });
    });
};