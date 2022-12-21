const router = require("express").Router();

const { getTodos, createTodo, updateTodo, deleteTodo } = require("./controllers/TodoController");


router.get("/", (req, res) => {
    res.send("MongoDB + Node.js = CRUD API");
});

router.get("/todos", getTodos);

router.post("/todos", createTodo);

router.put("/todos/:todoID", updateTodo);

router.delete("/todos/:todoID", deleteTodo);

module.exports = router;