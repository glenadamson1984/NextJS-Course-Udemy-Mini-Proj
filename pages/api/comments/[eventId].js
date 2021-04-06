import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // add server side validation if this was production
    const { email, name, text } = req.body;

    const newComment = {
      email,
      name,
      text,
      eventId
    };

    const client = await MongoClient.connect('mongodb+srv://new:new123@cluster0.fadas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const db = client.db();
    const result = await db.collection('comments').insertOne(newComment);
    newComment.id = result.insertedId;
    client.close();

    res.status(201).json({ message: "Added Comment", comment: newComment });
  } else if (req.method === "GET") {
    const dummyList = [{ id: 1, name: "glen", comment: "hello" }];

    const client = await MongoClient.connect('mongodb+srv://new:new123@cluster0.fadas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const db = client.db();
    const results = await db.collection('comments').find().sort().toArray();
    client.close();


    res.status(200).json({message: "list of comments", comments: results});
  }
};

export default handler;
