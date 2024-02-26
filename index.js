import express from 'express';
import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); // Exit with a non-zero code to indicate failure
});

const app = express();
const port = 3010;

app.get('/', (req, res) => {
  res.send("this is new server");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
