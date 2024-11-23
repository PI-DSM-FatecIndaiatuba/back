import usuarioInteresseService from '../services/usuarioInteresseService.js';

class UsuarioInteresseController {
  // CREATE - Cadastro de interesse
  async cadastrarUsuario(req, res) {
    const { nome, email, preferencia } = req.body;
    try {
      const usuario = await usuarioInteresseService.criarUsuario(nome, email, preferencia);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao cadastrar usuário' });
    }
  }

  // READ - Obter todos os usuários (acesso restrito a admin)
  async listarUsuarios(req, res) {
    try {
      const usuarios = await usuarioInteresseService.listarUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar usuários' });
    }
  }

  // UPDATE - Atualizar usuário
  async atualizarUsuario(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const usuarioAtualizado = await usuarioInteresseService.atualizarUsuario(
        Number(id),
        dadosAtualizados,
      );
      res.json(usuarioAtualizado);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar usuário' });
    }
  }

  // DELETE - Remover cadastro de usuário
  async deletarUsuario(req, res) {
    const { id } = req.params;
    try {
      await usuarioInteresseService.deletarUsuario(Number(id));
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar usuário' });
    }
  }
}

export default new UsuarioInteresseController();
