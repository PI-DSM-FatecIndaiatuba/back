import prisma from '../database/prismaClient.js';
import Feedback from '../entities/feedback.entity.js';

class FeedbackService {
  async criarFeedback(conteudo) {
    const feedbackCriado = await prisma.feedback.create({
      data: { conteudo },
    });
    return new Feedback(feedbackCriado.id, feedbackCriado.conteudo, feedbackCriado.status, feedbackCriado.criadoEm, feedbackCriado.atualizadoEm);
  }

  async listarFeedbacks() {
    const feedbacks = await prisma.feedback.findMany();
    return feedbacks.map(fb => new Feedback(fb.id, fb.conteudo, fb.status, fb.criadoEm, fb.atualizadoEm));
  }

  async atualizarFeedback(id, status) {
    const feedbackAtualizado = await prisma.feedback.update({
      where: { id },
      data: { status },
    });
    return new Feedback(feedbackAtualizado.id, feedbackAtualizado.conteudo, feedbackAtualizado.status, feedbackAtualizado.criadoEm, feedbackAtualizado.atualizadoEm);
  }

  async deletarFeedback(id) {
    await prisma.feedback.delete({ where: { id } });
  }
}

export default new FeedbackService();
