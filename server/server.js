// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load Environmental Elements
dotenv.config();

// Initiate Express
const app = express();

// Apply Middleware
app.use(cors());
app.use(express.json());

// Set Server Port
const PORT = process.env.PORT || 5000;

// Basic Test Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// later: app.get('/api/resume', ...)

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});