const db = require("../db/db");

//-----------------------GET ALL-----------------------
const getTodos = async (req, res) => {
  try {
    const todos = await db("todo").select().orderBy("id");
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
  }
};

//-----------------------GET ONE-----------------------
const getTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await db("todo").select().where("id", id);
    if (todo.length === 0) {
      res.status(404).json({ message: "Todo not found!" });
    } else {
      res.status(200).json(todo);
    }
  } catch (error) {
    console.error(error);
  }
};

//-----------------------CREATE-----------------------
const createTodo = async (req, res) => {
  const { title, description, completed } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Incomplete request body!" });
  }

  try {
    const todo = await db("todo").insert({ title, description, completed });
    res.status(201).json("Todo added");
  } catch (error) {
    console.error(error);
  }
};

//-----------------------UPDATE DESCRIPTION-----------------------
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: "You must provide a description!" });
  }

  try {
    await db("todo").select().where({ id }).update({ description });
    res.status(200).json({ message: "Updating description successful!" });
  } catch (error) {
    console.error(error);
  }
};

//-----------------------UPDATE COMPLETELY-----------------------
const updateTodoComplete = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  if (!title || !description || !completed) {
    return res.status(400).json({ message: "Incomplete request body!" });
  }

  try {
    await db("todo")
      .select()
      .where({ id })
      .update({ title, description, completed });
    res.status(200).json({ message: "Complete update successful!" });
  } catch (error) {
    console.error(error);
  }
};

//-----------------------DELETE-----------------------
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await db("todo").select().where("id", id).del();
    res.status(200).json({ message: "Delete successful!" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  updateTodoComplete,
  deleteTodo,
};
