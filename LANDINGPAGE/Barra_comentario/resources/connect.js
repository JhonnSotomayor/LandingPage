var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "dbavicolaavilu02",
});

conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });

  const puerto = process.env.PUERTO || 3000;

  app.listen(puerto, function () {
    console.log("Servidor funcionando en puerto: " + puerto);
  });

  app.post("/api/pedido", (req, res) => {
	let data = {
    	userped: req.body.USERPED,
    	emausped: req.body.EMAUSPED,
    	celusped: req.body.CELUSPED,
    	proped: req.body.PROPED,
    	msgped: req.body.MSGPED
	};
	let sql = "INSERT INTO pedido SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
  });