const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin }));
app.use(express.json());
app.use(express.static("public"));

app.listen(8080, () => {
  console.log("listening to port 8080");
});
