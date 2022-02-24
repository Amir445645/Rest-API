const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const PORT = process.env.PORT;
const dbURI = process.env.URI;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/", require("./routes/userRoutes.js"));
app.listen(PORT, (data, err) => {
  if (err) throw err;
  else console.log("server is running at port:" + PORT);
});
