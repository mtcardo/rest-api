const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
require("dotenv/config");

app.use(bodyParser.json());

const notificationsRoute = require("./routes/notifications");
app.use("/notifications", notificationsRoute);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 5000;
app.listen(port);
