const {Schema, model} = require('mongoose')

const schema = new Schema({
  id:{
    type: String,
    required: true
  },
  slug:{
    type: String,
    required: true
  },
  articul:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  categoryId:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
  year:{
    type: Number,
    required: true
  },
  pieces:{
    type: Number,
    required: false
  },
  minifigs:{
    type: String,
    required: false
  },
  description:{
    type: String,
    required: false
  },
  imgsmall:{
    type: String,
    required: false
  },
  imgbigl:{
    type: String,
    required: false
  },
  hits:{
    type: Boolean,
    required: false
  },
  stock:{
    type: Boolean,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  sale:{
    type: String,
    required: false
  }
},{
  timestamps: true
})

module.exports=model('Product', schema)