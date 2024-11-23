import express from 'express';
import FeedbackController from '../controllers/feedbackController.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.post('/feedbacks', FeedbackController.adicionarFeedback);
router.get('/feedbacks', FeedbackController.listarFeedbacks);
router.put('/feedbacks/:id', adminMiddleware, FeedbackController.atualizarFeedback);
router.delete('/feedbacks/:id', adminMiddleware, FeedbackController.deletarFeedback);

export default router;
