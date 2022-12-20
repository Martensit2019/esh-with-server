const tokenService = require('../services/token.service')

module.exports = (req, res, nex) => {
  if (req.method === 'OPTIONS') {
    return next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    const data = tokenService.validateAccess(token)

    if (!data) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    console.log('dec', data)
    
    req.category = data
    next()
  } catch (e) {
    res.status(401).json({ message: 'Unauthorized' })
  }
}
