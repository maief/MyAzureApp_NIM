const express = require("express");
const app = express();

const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("Hello World dari Azure 🚀");
});

app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});
