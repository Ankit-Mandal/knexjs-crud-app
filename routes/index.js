const express = require("express");
const todoController = require("../controllers/todo");

const router = express.Router();

//-----------------------GET ALL-----------------------
router.get("/", todoController.getTodos);

//-----------------------GET-----------------------
router.get("/:id", todoController.getTodo);

//-----------------------CREATE-----------------------
router.post("/", todoController.createTodo);

//-----------------------UPDATE DESCRIPTION-----------------------
router.patch("/:id", todoController.updateTodo);

//-----------------------UPDATE COMPLETELY-----------------------
router.put("/:id/complete", todoController.updateTodoComplete);

//-----------------------DELETE-----------------------
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
