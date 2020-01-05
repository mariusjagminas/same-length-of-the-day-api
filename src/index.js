const express = require("express");
const app = express();
const validateRequest = require("./validateRequest");
const sendDate = require("./sendDate");
const PORT = 5000;

app.use("/", validateRequest);

app.get("/", sendDate);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
