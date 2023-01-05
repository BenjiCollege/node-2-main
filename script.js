import express from 'express';
import router from "./routes.js";
import bodyParser from 'body-parser';

const app = express();

const port = 3020;

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});

app.use(bodyParser.json());
app.use("/api/characters", router);
