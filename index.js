const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db.js'); // Make sure db.js is set up to connect to MongoDB
const app = express();
const port = 5000;

// Use CORS to allow specific origins
app.use(cors({
  origin: ['http://localhost:3000', 'https://task-management-nine-ebon.vercel.app'], // Allow requests from your frontend domain
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json()); // Middleware to parse JSON data

// API routes
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/notes', require('./routes/notes.js'));
app.use('/api/contacts', require('./routes/contacts.js'));

// Health check route
app.get("/health", (req, res) => {
  res.send("Health OK");
});

// Connect to MongoDB
connectToMongo(); // Ensure this method is defined in db.js to connect to your MongoDB instance

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
  console.log(`iNotesBook backend app listening on port ${port}`);
});
