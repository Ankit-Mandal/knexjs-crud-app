const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");

const PORT = 8080;
const app = express();
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/todo", router);

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
