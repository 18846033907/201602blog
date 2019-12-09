var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/201602todo');

var Todo=mongoose.model('todos',new mongoose.Schema({
    name:String
}))
module.exports=Todo;
