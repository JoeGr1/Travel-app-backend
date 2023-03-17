const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

const destinationsRoute = require("./routes/destinationsRoute");

app.use("/destinations", destinationsRoute);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
