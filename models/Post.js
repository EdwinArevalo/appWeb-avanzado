const mongoose = require('mongoose');
const {Schema} = mongoose;  
  
//fecha: {type: Date, default: Date.now}

const commentSchema = new Schema({ 
    autor:  {type:String, required: true},
    mensaje:  {type:String, required: true},
    fecha: {type: String}
});

const postSchema = new Schema({
    titulo: {type:String, required:true},
    descripcion: {type:String, required: true},
    categoria: {type:String, required: true},
    fecha: {type: String},
    comentarios: [commentSchema]
});

Post = mongoose.model('posts', postSchema, 'posts');

module.exports = Post;

