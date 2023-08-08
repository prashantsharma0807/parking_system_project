const Parking=require('../models/parking')



exports.parkingdetails=async(req,res)=>{
    try{
  const record= await Parking.find().sort({vin:1})
  const parkingin= await Parking.count({status:'IN'})
  res.render('parking.ejs',{record,parkingin})
}catch(error){
    res.send({message:error.message})
}
}
exports.newparking=(req,res)=>{
    res.render('newparking.ejs',{message:''})
}
exports.add=(req,res)=>{
    try{
    const{vno,vtype}=req.body
    const record =new Parking({vno:vno,vtype:vtype})
    record.save()
    //console.log(record)
    res.redirect('/parking')
}catch(error){
    res.send({message:error.message})
}
}

exports.pupdate=async(req,res)=>{
    const id =req.params.id
    try{
    const record=await Parking.findById(id)
    let vout=new Date()
    let spendtime=((vout-record.vin)/(1000*60*60))
    let amount=0
    if(record.vtype=='2w'){
        amount=spendtime*20
    }else if(record.vtype=='3w'){
        amount=spendtime*40
    }else if(record.vtype=='4w'){
        amount=spendtime*100
    }else if(record.vtype=='lw'){
        amount=spendtime*200
    }else if(record.vtype=='hw'){
        amount=spendtime*350
    }else{
        amount=spendtime*200
    }
    await Parking.findByIdAndUpdate(id,{vout:vout,amount:Math.round(amount),status:'OUT'})
    res.redirect('/parking')
}catch(error){
    res.send({message:error.message})
}
}

exports.print=async(req,res)=>{
    const id =req.params.id
    try{
   const record= await Parking.findById(id)
    res.render('invoice.ejs',{record})
}catch(error){
    res.send({message:error.message})
}
}