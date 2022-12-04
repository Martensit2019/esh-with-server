const Category = require('../models/Category')
const Product = require('../models/Product')
const User = require('../models/User')
const categoryMock = require('../mock/categories.json')
const productMock = require('../mock/products.json')
const userMock = require('../mock/users.json')

module.exports = async () => {
  const categories = await Category.find()
  if (categories.length !== categoryMock.length) {
    await createInitialEntity(Category, categoryMock)
  }
  const products = await Product.find()
  if (products.length !== productMock.length) {
    await createInitialEntity(Product, productMock)
  }
  const users = await User.find()
  if (users.length !== userMock.length) {
    await createInitialEntity(User, userMock)
  }
}

async function createInitialEntity(Model, data) {
  await Model.collection.drop()
  return Promise.all(
    data.map(async (item) => {
      try {
        const newItem = new Model(item)
        await newItem.save()
      } catch (e) {
        return e
      }
    })
  )
}
