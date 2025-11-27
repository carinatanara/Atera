import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { connect } from 'mongoose';
import recipes from './routes/recipes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.json({message: 'API is running'});
});

app.use('/api/recipes', recipes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});