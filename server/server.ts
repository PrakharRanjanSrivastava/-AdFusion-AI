import "./configs/instrument.js"

import express, { Request, Response } from 'express';
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'
import 'dotenv/config'
import clerkWebhooks from './controllers/clerk.js';

import * as Sentry from "@sentry/node"
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";

const app = express();

const PORT = 5000;



app.use(cors({
    origin: 'http://localhost:5173', // Your exact Vite frontend URL
    credentials: true // This is required for Clerk auth to work across ports!
}));

app.post('/api/clerk',express.raw({type:'application/json'}),clerkWebhooks)
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.use('/api/user',userRouter)
app.use('/api/project',projectRouter)


// The error handler must be registered before any other error middleware and after all controllers
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});