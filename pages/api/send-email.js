import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3004;

app.use(express.json());
// pass = process.env.pass;
// account = process.env.akun;
app.post('/api/send-email', async (req, res) => {
  try {
    // Connect to the MongoDB database
    const client = await MongoClient.connect(`mongodb+srv://pratamarizki:08812422351@cluster0.dpkx4tu.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true });
    const db = client.db('mydatabase');

    // Insert the email into the "emails" collection
    const result = await db.collection('emails').insertOne(req.body);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
