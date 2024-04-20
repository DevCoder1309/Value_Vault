import express from "express";
import ViteExpress from "vite-express";
import mongoose from 'mongoose';
import User from './dummydata.js'
import cors from 'cors';
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/value_vault").then(
  () => console.log('MONGODB CONNECTED')
).catch(
  () => console.log("ERROR")
);

app.use(cors())
app.use(express.json())

app.get("/home", (req, res) => {
    User.find()
  .then(loa => res.json(loa))
  .catch(err => res.json(err))
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
