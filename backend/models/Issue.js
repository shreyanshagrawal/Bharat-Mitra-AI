const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  issueType: {
    type: String,
    required: true
  },
  customIssue: {
    type: String,
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'In Progress', 'Resolved', 'Closed']
  }
}, { timestamps: true });

module.exports = mongoose.model('Issue', issueSchema);
