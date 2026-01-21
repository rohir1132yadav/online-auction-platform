const express = require('express');
const connectDB = require('./connection');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/auctions', require('./routes/auctionRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Auction Platform API' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
