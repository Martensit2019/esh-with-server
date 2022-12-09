const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    fio: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String },
    phone: { type: String },
    address: { type: String },
  },
  {
    timestamps: true,
  }
)

module.exports = model('User', schema)
