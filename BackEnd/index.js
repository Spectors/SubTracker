import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import subscriptions from './subscriptions.js'; // Ensure the .js extension is included






const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/subscription-canceller', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('Server is Putaaa');
});

app.get('/api/subscriptions', (req, res) => {
  res.json(subscriptions);
});

app.post('/api/subscriptions', (req, res) => {
  const newSubscription = req.body;
  subscriptions.push(newSubscription);
  res.status(201).json(newSubscription);
});

app.delete('/api/subscriptions/:id', (req, res) => {
  const { id } = req.params;
  // Find index of the subscription to delete
  const index = subscriptions.findIndex(sub => sub.id === parseInt(id));

  // Check if subscription exists
  if (index !== -1) {
    // Remove subscription from the array
    subscriptions.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Subscription not found' });
  }
});
// Endpoint to open Rocket League
app.get('/api/open-rocket-league', (req, res) => {
  // Change this path to the actual path of Rocket League executable on your system
  const rocketLeaguePath = "C:\Program Files\Epic Games\rocketleague\Binaries\Win64\RocketLeague.exe";

  exec(`start "" "${rocketLeaguePath}"`, (err) => {
    if (err) {
      console.error('Error opening Rocket League:', err);
      res.status(500).send('Failed to open Rocket League');
    } else {
      res.send('Rocket League opened successfully');
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});