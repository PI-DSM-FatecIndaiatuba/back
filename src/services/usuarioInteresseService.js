import prisma from '../database/prismaClient.js';
import UsuarioInteresse from '../entities/usuarioInteresse.entity.js';

class UsuarioInteresseService {
  // CREATE - Cadastro de interesse
  async criarUsuario(nome, email, preferencia) {
    const usuarioCriado = await prisma.usuarioInteresse.create({
      data: { nome, email, preferencia },
    });

    return new UsuarioInteresse(
      usuarioCriado.id,
      usuarioCriado.nome,
      usuarioCriado.email,
      usuarioCriado.preferencia,
      usuarioCriado.criadoEm,
      usuarioCriado.atualizadoEm,
    );
  }

  // READ - Obter todos os usuários (acesso restrito a admin)
  async listarUsuarios() {
    const usuarios = await prisma.usuarioInteresse.findMany();
    return usuarios.map(
      (usuario) =>
        new UsuarioInteresse(
          usuario.id,
          usuario.nome,
          usuario.email,
          usuario.preferencia,
          usuario.criadoEm,
          usuario.atualizadoEm,
        ),
    );
  }

  // UPDATE - Atualizar informações do usuário
  async atualizarUsuario(id, dadosAtualizados) {
    const usuarioAtualizado = await prisma.usuarioInteresse.update({
      where: { id },
      data: dadosAtualizados,
    });

    return new UsuarioInteresse(
      usuarioAtualizado.id,
      usuarioAtualizado.nome,
      usuarioAtualizado.email,
      usuarioAtualizado.preferencia,
      usuarioAtualizado.criadoEm,
      usuarioAtualizado.atualizadoEm,
    );
  }

  // DELETE - Remover cadastro de usuário
  async deletarUsuario(id) {
    await prisma.usuarioInteresse.delete({
      where: { id },
    });
  }
}

export default new UsuarioInteresseService();
