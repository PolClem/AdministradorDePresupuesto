const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const cors = require("cors");
const routes = require("./routes,js");
const app = express();
app.set("port", process.env.PORT || 9000);
const dboptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Password@123",
  database: "presupuesto",
  insecureAuth: true,
};

//Middleware -------------------------------------------
app.use(myconn(mysql, dboptions, "single"));
app.use(express.json());
app.use(cors());

//Routes -----------------------------------------------
app.get("/", (req, res) => {
  res.send("Welcome to the  api Administrador de preaupuesto,");
});
app.use("/api", routes);

//Server running ---------------------------------------
app.listen(9000, () => {
  console.log("Server running on port", app.get("port"));
});
