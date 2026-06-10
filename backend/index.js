require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Issue = require('./models/Issue');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bharatMitra')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/issues', async (req, res) => {
  try {
    const { issueType, customIssue, location, description } = req.body;
    
    // TODO: Implement file upload logic (e.g. using multer) here if photo evidence is needed on backend
    
    const newIssue = new Issue({
      issueType,
      customIssue,
      location,
      description,
    });
    
    const savedIssue = await newIssue.save();
    res.status(201).json({ success: true, data: savedIssue });
  } catch (error) {
    console.error('Error saving issue:', error);
    res.status(500).json({ success: false, error: 'Failed to submit issue' });
  }
});

app.get('/api/issues', async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json({ success: true, data: issues });
  } catch (error) {
    console.error('Error fetching issues:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch issues' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
