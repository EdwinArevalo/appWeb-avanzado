const mongoose = require('mongoose');
const {Schema} = mongoose;  
  
//fecha: {type: Date, default: Date.now}

const commentSchema = new Schema({ 
    autor:  {type:String, required: true},
    mensaje:  {type:String, required: true},
    fecha: {type: String}
});
 

Comment = mongoose.model('comments', commentSchema, 'comments');

module.exports = Comment;
