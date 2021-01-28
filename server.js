const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
