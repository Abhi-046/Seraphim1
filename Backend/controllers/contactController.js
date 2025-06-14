const pool = require('../config/db');

// Submit contact form
exports.submitContact = async (req, res) => {
  try {
    const { fullname, email, subject, message } = req.body;
    
    // Validate input
    if (!fullname || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const query = `
      INSERT INTO contacts (fullname, email, subject, message, created_at)
      VALUES ($1, $2, $3, $4, NOW())
      RETURNING *
    `;
    
    const values = [fullname, email, subject, message];
    const result = await pool.query(query, values);
    
    res.status(201).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
};