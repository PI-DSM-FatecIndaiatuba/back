import express from 'express';
import usuarioInteresseRoutes from './routes/usuarioInteresseRoutes.js';

const app = express();
app.use(express.json());

// Usar as rotas de usuario de interesse
app.use('/api', usuarioInteresseRoutes);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
