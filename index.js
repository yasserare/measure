const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const uri =
 // "mongodb://younessanass86:nHS0wqny4Kcefau0@ac-991z5rd-shard-00-00.gs3ciat.mongodb.net:27017,ac-991z5rd-shard-00-01.gs3ciat.mongodb.net:27017,ac-991z5rd-shard-00-02.gs3ciat.mongodb.net:27017/?ssl=true&replicaSet=atlas-prw0mp-shard-0&authSource=admin&retryWrites=true&w=majority";
  "mongodb+srv://vercel-admin-user:sxbNC8jBhUFzTvbw@tracker.gs3ciat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const myDB = client.db("counter_tasks");

async function run() {
  try {
    await client.connect();
    await myDB.command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

async function start(res) {
  
  res.render("./index");
}

app.get("/", function (req, res) {
  start(res).catch(console.dir);
});

app.listen(3000, () => console.log("visit: localhost:3000 in your browser"));