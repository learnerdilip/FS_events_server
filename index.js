const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./event/router");
const app = express();

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

const port = 4000;

app.use(router);
app.listen(port, () => console.log(`the server is listening at ${port}`));
