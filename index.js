const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("I know how to run node app");
});
app.listen(3000, () => console.log("Listening to port 3000"));
