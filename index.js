const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app); // valid because authRoutes returns a function and app is the argument

const PORT = process.env.PORT || 5000;
app.listen(PORT);
