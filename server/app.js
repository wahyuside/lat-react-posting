require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3200;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const cors = require("cors");
app.use(cors());

const routes = require("./routes");
app.use(routes);

console.log("Test");

app.listen(port, () => {
  console.log("App is listening on port", port);
});
