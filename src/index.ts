import * as bodyParser from "body-parser";
import * as swaggerDocument from "./swagger.json";
import * as swaggerUi from "swagger-ui-express";
import express, { Request, Response, NextFunction } from "express";
import configureRoutes from "./routes";

require("dotenv/config");

const app = express();

app.use(bodyParser.json());

const bodyLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    next();
};
app.use(bodyLogger);

configureRoutes(app);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 5000;
app.listen(port);
