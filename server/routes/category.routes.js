const express = require('express')
const Category = require('../models/Category')
const auth = require('../middleware/auth.middleware')
const router = express.Router({ mergeParams: true })

// router.get('/', async (req, res) => {
router.get('/', auth, async (req, res) => {
  const { isShow } = req.query
  console.log('query', isShow)
  try {
    const list = await Category.find(req.query.isShow && { isShow: req.query.isShow })
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

router.patch('/:categoryId', async (req, res) => {
  console.log(req.params)
  console.log(req.body)
  try {
    const updateCategory = await Category.findByIdAndUpdate(req.params.categoryId, req.body, { new: true })
    res.status(200).send(updateCategory)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

router.post('/', async (req, res) => {
  console.log('catrout', req.body)
  // router.post(auth, async (req, res) => {
  try {
    const newCategory = await Category.create({
      ...req.body,
      // userId: req.user._id,
    })
    res.status(201).send(newCategory)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

module.exports = router
