const express = require('express')
const Category = require('../models/Category')
const auth = require('../middleware/auth.middleware')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
// router.get('/', auth, async (req, res) => {
  const { isShow } = req.query
  try {
    const list = await Category.find(req.query.isShow && { isShow: req.query.isShow })
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

// router.post('/', async (req, res) => {
router.post('/', auth, async (req, res) => {
  try {
    const newCategory = await Category.create({
      ...req.body,
    })
    res.status(201).send(newCategory)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

// router.patch('/:categoryId', async (req, res) => {
router.patch('/:categoryId', auth, async (req, res) => {
  try {
    const updateCategory = await Category.findByIdAndUpdate(req.params.categoryId, req.body, { new: true })
    res.status(200).send(updateCategory)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

router.delete('/:categoryId', auth,  async (req, res) => {
  const removedCategory = await Category.findById(req.params.categoryId)
  await removedCategory.remove()
  return res.send(null)
})



module.exports = router
