import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';


dotenv.config();

mongoose.connect(process.env.MONGO).then( () => {console.log("mongodb is connected");});
try {
    
} catch (error) {
    
}((err) => {console.log("err");});

const app = express();
app.use(express.json());
app.use(cookieParser());



app.listen(3000, () => {
    console.log('server is running on port 3000!');
});

app.use('/api/auth',authRoutes);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});