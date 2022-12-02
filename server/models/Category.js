const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: false,
    },
    imgName: {
      type: String,
      required: true,
    },
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model('Category', schema)
