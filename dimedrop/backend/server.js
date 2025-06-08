const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
