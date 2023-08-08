const mongoose=require('mongoose')

//const now=new Date()
//const datestring=now.toDateString() 

const parkingSchema= mongoose.Schema({
    vno:String,
    vtype:String,
    vin:{type:Date,default:new Date()},
    vout:Date,
    status:{type:String,default:'IN'},
    amount:{type:Number,default:0}
})
 

module.exports=mongoose.model('parking',parkingSchema)