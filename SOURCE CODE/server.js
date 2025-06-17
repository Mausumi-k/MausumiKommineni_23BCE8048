// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load .env variables
dotenv.config();

// Import routes
const userRoutes = require('./routes/userRoutes');
const skillRoutes = require('./routes/skillRoutes');

// Initialize app
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('DB connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/skills', skillRoutes);

// Swagger setup
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerOptions = require("./swagger/swaggerOptions");

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  swaggerOptions: {
    persistAuthorization: true  // ✅ Keeps the token between requests in Swagger UI
  }
}));

// Server
const PORT = process.env.PORT || 27018;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
