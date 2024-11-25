import express from 'express';
import usuarioInteresseRoutes from './routes/usuarioInteresseRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import cors from 'cors';

const app = express();

const allowedOrigins = [
  'http://localhost:3001',
  'http://localhost:3000',
  'https://pi-front-2-gzop.vercel.app/',
  'https://front-real-blond.vercel.app/',
]; // Adicione os domínios necessários

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());

// Usar as rotas de usuario de interesse
app.use('/api', usuarioInteresseRoutes);
app.use('/api', feedbackRoutes);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
