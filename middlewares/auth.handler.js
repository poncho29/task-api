const boom = require('@hapi/boom');

const { config } = require('../config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];

  if (apiKey === config.apiKey) {
    next();
  } else {
    next (boom.unauthorized());
  }
}

// Valida el role del usuario
function checkAdminRole(req, res, next) {
  const user = req.user;

  if (user.role === 'admin') {
    next();
  } else {
    next(boom.unauthorized());
  }
}

// Valida el role y sus permisos dinamicamente
function checkRoles (...roles) {
  return (req, res, next) => {
    const user = req.user;

    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized);
    }
  }
}

module.exports = { checkApiKey, checkAdminRole, checkRoles };
