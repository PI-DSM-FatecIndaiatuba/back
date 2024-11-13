const adminMiddleware = async (req, res, next) => {
  const usuario = req.user; // Usuário autenticado via algum middleware (ex: JWT)

  if (!usuario || !usuario.isAdmin) {
    return res.status(403).json({ error: 'Acesso negado! Somente administradores.' });
  }

  next();
};

export default adminMiddleware;
