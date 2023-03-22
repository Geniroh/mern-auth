const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.statusCode(200).json({
    message: "Welcome to api",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
