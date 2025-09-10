import express from 'express';
import User from '../models/User.js';
const router = express.Router();

router.post('/add', async (req, res) => {
  const { name, email, role } = req.body;
  const user = new User({ name, email, role });
  await user.save();
  res.status(201).json(user);
});

export default router;
