import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

import groceryRouter from './routes/groceryListing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

import cors from 'cors';

dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB💖👌');
  })
  .catch((err) => {
    console.log(err);
  });

  const __dirname = path.resolve();



//use when create grocery list
app.use(cors({
  origin: 'http://localhost:5173', // Allow only your frontend
  credentials: true, // If using cookies or authentication
}));

app.use(express.json());

app.use(cookieParser());



app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use('/api/grocery', groceryRouter);



app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000💕🔥');
});