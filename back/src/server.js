const express = require("express");
const app = express();
const PORT = 3001;
const router = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/rickandmorty", router);

app.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});
