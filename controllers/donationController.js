const pool = require('../config/db');

// Submit donation
exports.submitDonation = async (req, res) => {
  try {
    const { fullname, email, amount, paymentMethod } = req.body;
    
    // Validate input
    if (!fullname || !email || !amount || !paymentMethod) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Validate amount
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Invalid donation amount' });
    }
    
    const query = `
      INSERT INTO donations (fullname, email, amount, payment_method, created_at)
      VALUES ($1, $2, $3, $4, NOW())
      RETURNING *
    `;
    
    const values = [fullname, email, amount, paymentMethod];
    const result = await pool.query(query, values);
    
    res.status(201).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error submitting donation:', error);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
};