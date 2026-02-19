import { MongoClient } from "mongodb";

// app/new-meetup
async function handler(req, res) {
  console.log("req.method:", req.method);
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db("meetups");
    const collection = db.collection("meetups");

    const response = await collection.insertOne(data);
    console.log("response", response);
    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
