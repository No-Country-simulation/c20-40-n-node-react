//JavaScript

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server is UP!');
});

app.listen(PORT,   
 () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb+srv://acelven:p8XuoBflUAYXLMtP@chatapp.66rdt.mongodb.net/?retryWrites=true&w=majority&appName=ChatApp')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err)); 