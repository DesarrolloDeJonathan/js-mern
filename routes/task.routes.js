//Lo requerimos para crear rutas
const express = require("express");
// sacamos el metodo para las rutas
const router = express.Router();

// Atravez de este modelo hare consultas a la BBDD
const Task = require("../models/task");

router.get("/", (req, res) => {
  // res.send("Hello perras");
  Task.find((err, tasks) => {
    console.log(tasks);
  });
  res.json({
    status: "API Works!",
  });
});

module.exports = router;
