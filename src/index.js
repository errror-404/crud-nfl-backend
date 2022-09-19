const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ credentials: false, origin: "*" }));

//SETTINGS
app.set("port", process.env.PORT || 3001);
//MIDDLEWARES
app.use(express.json());
//ROUTES
app.use(require("./routes/jugadores"));
app.use(require("./routes/estadios"));
app.use(require("./routes/equipos"));

app.listen(app.get("port"), () => {
  console.log("==SERVER ON PORT ==", app.get("port"));
});
