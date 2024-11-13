const adminMiddleware = (req, res, next) => {
  // Aqui você pode colocar a lógica para validar o administrador, por exemplo:
  const isAdmin = req.headers['x-admin'] === 'true'; // Exemplo de verificação

  if (!isAdmin) {
    return res.status(403).json({ error: 'Acesso restrito a administradores.' });
  }

  next();
};

export default adminMiddleware;
