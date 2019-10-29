var mongoose=require('mongoose');
var Check=mongoose.model('detail',{  
     //users is  a collection name
Name:{
    type:String
},
Number:{
type:Number
}
})
module.exports={Check}