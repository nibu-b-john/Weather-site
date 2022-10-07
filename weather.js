const express = require("express");
const bodyParser = require("body-parser");
const weather = require("./routes/weather");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(weather);
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
