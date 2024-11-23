import express from 'express';
import usuarioInteresseRoutes from './routes/usuarioInteresseRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  }),
);
app.use(express.json());

// Usar as rotas de usuario de interesse
app.use('/api', usuarioInteresseRoutes);
app.use('/api', feedbackRoutes);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
