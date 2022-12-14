import React, { Component } from "react";

class App extends Component {
  constructor() {
    //  Heredamos del componente
    super();
    this.state = {
      title: "",
      description: "",
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addTask(e) {
    // Capturamos los datos atravez del estado de la aplicacion
    // console.log(this.state);
    // Evento fecth para enviar una peticion http al sevidor
    fetch("/api/task", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // Aplicamos una promesa
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        M.toast({ html: "Task Saved" });
        this.setState({ title: "", description: "" });
        this.getTasks(); // Para mostrar tareas que agregemos
      })
      .catch((err) => console.error(err));
    e.preventDefault();
  }
  componentDidMount() {
    // Al llamar este evento podremos ejecutar cualquier cosa
    console.log("El componente fue montado");
    this.getTasks();
  }
  getTasks() {
    fetch("/api/task")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ tasks: data });
        // console.log(this.state.tasks);
      });
  }
  handleDelete(id) {
    if (confirm("Are you suere you want to delete it?")) {
      console.log(`deleting: ${id}`);
      fetch(`api/task/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          M.toast({ html: "Task Deleted" });
          this.getTasks();
        })
        .catch((err) => console.error(err));
    } else {
      M.toast({ html: "Task Not Deleted" });
    }
  }
  handleChange(e) {
    // Almacenamos en una variable dos datos que estan en e.target
    const { name, value } = e.target;
    // Lo usamos para cambiar el estado de una aplicacion de React
    this.setState({
      [name]: value,
    });
    console.log(e.target.name);
  }
  render() {
    return (
      <div>
        <h2>Testing</h2>
        {/* Navegation */}
        <nav className="light-blue darken-4">
          <div className="container">
            <a href="/" className="brand-logo">
              MERN STACK
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addTask}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          onChange={this.handleChange}
                          value={this.state.title}
                          type="text"
                          name="title"
                          id=""
                          placeholder="Task Title"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          onChange={this.handleChange}
                          value={this.state.description}
                          className="materialize-textarea"
                          name="description"
                          id=""
                          cols="30"
                          rows="10"
                          placeholder="Task Description"
                        ></textarea>
                      </div>
                    </div>
                    <button className="btn light-blue darken-4" type="submit">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tasks.map((task) => {
                    return (
                      // Cada elemento hijo dentro de un arreglo o iterador deberia tener una propiedad unica
                      <tr key={task._id}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        {/* Agregar estilos para mejor los botones */}
                        <td>
                          <button
                            // onClick={this.handleDelete}
                            className="btn light-blue darken-4"
                          >
                            <i className="material-icons">edit</i>
                          </button>
                          <button
                            onClick={() => this.handleDelete(task._id)}
                            className="btn light-blue darken-4"
                            style={{ margin: "4px" }}
                          >
                            <i className="material-icons">delete</i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
