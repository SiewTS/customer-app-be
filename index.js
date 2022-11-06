import express from 'express'
import connectDB from './config/db.js';
import cors from 'cors'
import dotenv from 'dotenv'
import customersRoutes from './routes/customers.js'

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/customers', customersRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on port:http://localhost:${PORT}`)
});