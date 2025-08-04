import jwt from 'jsonwebtoken'

export const authenticatedToken = (req, res, next) => {
  console.log('🔍 Verificando token...')
  
  const authHeader = req.headers['authorization']
  console.log('Header recibido:', authHeader)
  
  const token = authHeader && authHeader.split(' ')[1]
  console.log('Token extraído:', token ? 'Existe' : 'No existe')
  
  if (!token) {
    console.log('Sin token')
    return res.status(401).json({ error: 'Token requerido' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY)
    console.log('Token válido:', decoded)
    
    // Se guarda al usuario para el siguiente middleware
    req.user = decoded
    next()
    
  } catch (error) {
    console.log('❌ Token inválido:', error.message)

    return res.status(403).json({ error: 'Token inválido' })
  }
}



export const requireRole = (neededRole) => {
  return (req, res, next) => {

    if (req.user.role !== neededRole) {
      return res.status(403).json({
        error: "Acceso denegado",
        message: `Se requiere rol ${neededRole}`,
        userRole: req.user.role,
      });
    }

    console.log("Rol autorizado -", req.user.role);
    next();
  };
};
