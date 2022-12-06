import smsController from "./controllers/smsController";
import userController from "./controllers/userController";

const express = require("express");
import { initDefaultApp } from "./utils/firebase";

const app = express();

app.use(express.json())

initDefaultApp();

app.get("/", (req,res) => { res.send('Server is running') });

const router = express.Router();

router.use('/users', userController);

router.use('/sms', smsController);

app.use(router);

app.listen(4000, () => {
  console.log(`[server]: Server is running at http://localhost:${4000}`);
});



