const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const connection = require("./config/db");
const port = 8000;
app.use(cors());
app.use(bodyParser.json());

const temp = require("./routes/regrout");
app.use("/api/signup", temp);

const index = require("./routes/taskroute");
app.use("/api/index", index);

const logg = require("./routes/loginrout");
app.use("/api/logg", logg);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
