import FeedbackService from '../services/feedbackService.js';

class FeedbackController {
  async adicionarFeedback(req, res) {
    const { conteudo } = req.body;

    if (!conteudo || conteudo.trim() === '') {
      return res.status(400).json({ error: 'Conteúdo do feedback é obrigatório.' });
    }

    try {
      const feedback = await FeedbackService.criarFeedback(conteudo);
      res.status(201).json(feedback);
    } catch (error) {
      console.error('Erro ao criar feedback:', error); // Log detalhado
      res.status(500).json({ error: 'Erro ao enviar feedback.' });
    }
  }

  async listarFeedbacks(req, res) {
    try {
      const feedbacks = await FeedbackService.listarFeedbacks();
      res.json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar feedbacks.' });
    }
  }

  async atualizarFeedback(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const feedbackAtualizado = await FeedbackService.atualizarFeedback(Number(id), status);
      res.json(feedbackAtualizado);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar feedback.' });
    }
  }

  async deletarFeedback(req, res) {
    const { id } = req.params;
    try {
      await FeedbackService.deletarFeedback(Number(id));
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar feedback.' });
    }
  }
}

export default new FeedbackController();
