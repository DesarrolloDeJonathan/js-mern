//Lo requerimos para crear rutas
const express = require("express");
// sacamos el metodo para las rutas
const router = express.Router();

// Atravez de este modelo hare consultas a la BBDD
const Task = require("../models/task");

// await tomara un rato pero cuando ya este listo los guardara en una constante
// async await es una forma mas sencilla de entender el codigo
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.json(tasks);
});

router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description });
  await task.save();
  console.log(task);
  res.json({ status: "Task saved" });
});

router.put("/:id", async (req, res) => {
  // Obtenemos los datos de req.body desde el cliente
  const { title, description } = req.body;
  // y apartir de esos datos crear una nueva tarea
  const newTask = { title, description };
  // Operacion en la BBDD toma tiempo por eso usaremos await
  // esta funcion actualiza la tarea
  await Task.findByIdAndUpdate(req.params.id, newTask);
  // console.log(req.params.id);
  res.json({ status: "Task Update" });
});

// Cada consulta a la BBDD toma un tiempo por eso es bueno usar un async await
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({ status: "Task Deleted" });
});

module.exports = router;
