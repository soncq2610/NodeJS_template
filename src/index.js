const express = require("express");
const app = express();
// require("dotenv/config");
// require("./src/routers/routers")(app);

app.listen(process.env.PORT || "4000", () => {
  console.log(process.env.PORT);
  console.log(`Server is running on port: ${process.env.PORT || "3000"}`);
});
