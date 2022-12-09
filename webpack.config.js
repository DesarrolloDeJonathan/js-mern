// toma el archivo app/index.js lo convierte y lo coloca dentro de la carpeta public
// en el output no le puedo dar la ruta como un string ya que necesita una ruta absoluta
// con la pripiedad filename le daremos un nombre al archivo donde quedara conpactado el codigo en una linea haciendo que pese menos
module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: __dirname + "/src/public",
    filename: "bundle.js",
  },
  // propiedad module objeto
  module: {
    // propiedad rules array de objetos
    rules: [
      // que son reglas adicionales para webpack
      {
        // Testea o convierte todos los archivos que terminen en estas extenciones que estan en la exprecion regular
        test: /\.m?js$/,
        //Escluimos estos directorios
        exclude: /node_modules/,
        // utiliza babel-loader
        use: {
          //con esto
          loader: "babel-loader",
          // Esto evita que tengamos que crear .babelrc
          options: {
            //Esto debe leer, traducira sintaxis moderna js jsx y react
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
