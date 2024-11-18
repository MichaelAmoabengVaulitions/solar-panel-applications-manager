import express, { Application, Request, Response } from "express";
import cors from "cors";
import applicationRoutes from "./routes/applicationRoutes";

const app: Application = express();

// CORS Configuration
const corsOptions = {
    origin: "*",
};

// Middleware
app.use(cors(corsOptions)); // Enable CORS


app.use(express.json());

app.use('/applications', applicationRoutes);
app.use((req, res) => {
    res.status(404).send('Not Found');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
