import express from 'express';
import applicationRoutes from './routes/applicationRoutes';

const app = express();
app.use(express.json());
app.use('/applications', applicationRoutes);
app.use((req, res) => {
    res.status(404).send('Not Found');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
