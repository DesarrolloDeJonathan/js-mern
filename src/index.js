const express = require("express");
const morgan = require("morgan");
const path = require("path");

const { mongoose } = require("./database");
const app = express();

//Settings por si queremos desplajarlo en la nube
app.set("port", process.env.PORT || 9000);

// Middleswares funciones que se ejecutan antes de que lleguen a nuestras rutas
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/task", require("./routes/task.routes"));

// Static files le indicamos la ruta de public
app.use(express.static(path.join(__dirname, "public")));
// console.log(__dirname + "/public");
// console.log(path.join(__dirname, "public")); nos ayuda con el slash

// Starting server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
