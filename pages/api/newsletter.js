import { MongoClient} from "mongodb";

const handler = async (req, res) => {
    if(req.method === 'POST') {
        const body = JSON.parse(req.body);
        // in production we would validate the email

        const client = await MongoClient.connect('mongodb+srv://new:new123@cluster0.fadas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        const db = client.db();
        await db.collection('emails').insertOne({email: body.email});
        client.close();

        res.status(201).json({message: "email stored successfully"});
    }
    
    
}

export default handler;