const express = require('express')
const Product = require('../models/Product')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  const query = req.query
  console.log('query', query)
  const filter = {}
  if (query.categoryId !== undefined) {
    filter.categoryId = query.categoryId
  }
  if(query.type){
    filter.type = query.type
  }
  const sort = {}
  if (query._sort) {
    sort[query._sort] = query._order ? -1 : 1
  }
  try {
    if(query.slug){
      filter.slug=query.slug
      const list = await Product.find(filter)
      res.status(200).send(list)
    }else{
       const list = await Product.find(filter).sort(sort).skip(query._start).limit(query._limit)
    const total = await Product.find(filter).count()
    res.status(200).send({ list, total })
    }
   
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

module.exports = router
