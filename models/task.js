// Aqui modelaremos los datos, como llegaran y que llega a la BBDD
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Definimos el esquema de los datos y lo alamcenamos en una variable para reutilizarlo
const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Usaremos este modulo y el modulo lo asignamos a task, exportamos
module.exports = mongoose.model("Task", TaskSchema);
