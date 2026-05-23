const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'frontend')));

// Mocked auth endpoints for local testing (no DB required)
app.post('/api/v1/users/register', (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  return res.status(201).json({ success: true, message: 'User registered successfully' });
});

app.post('/api/v1/users/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  return res.status(200).json({ success: true, message: 'Login successful', token: 'dev-fake-token' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Dev server running: http://localhost:${PORT}`));
