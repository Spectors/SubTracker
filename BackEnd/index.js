const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/subscription-canceller', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('Server is Putaaa');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});