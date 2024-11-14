import express from 'express';
import usuarioInteresseController from '../controllers/usuarioInteresseController.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.post('/usuarios-interesse', usuarioInteresseController.cadastrarUsuario);
router.get('/usuarios-interesse',  usuarioInteresseController.listarUsuarios);
router.put('/usuarios-interesse/:id', usuarioInteresseController.atualizarUsuario);
router.delete('/usuarios-interesse/:id', usuarioInteresseController.deletarUsuario);

export default router;
