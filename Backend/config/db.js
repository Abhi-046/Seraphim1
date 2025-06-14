const { Pool } = require('pg');
require('dotenv').config();

// Use the connection string directly instead of individual parameters
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err.stack);
  } else {
    console.log('Successfully connected to Neon DB');
  }
});

module.exports = pool;