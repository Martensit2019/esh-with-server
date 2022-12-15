const express = require('express')
const User = require('../models/User')
const router = express.Router({ mergeParams: true })

router.patch('/:userId', async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate (req.params.userId, req.body, {new:true})
    res.status(200).send(updateUser)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})
router.get('/:userId', async (req, res) => {
  try {
    const list = await User.findById(req.params.userId)
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

module.exports = router