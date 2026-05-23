require('dotenv').config();
const connectDB = require('./config/db');
const app = require('./routes/app');

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
