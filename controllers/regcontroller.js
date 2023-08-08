const Reg = require('../models/reg')
const bcrypt = require('bcrypt')



exports.loginform = (req, res) => {
    res.render('login.ejs', { message: '' })
}

exports.regform = (req, res) => {
    res.render('reg.ejs', { message: '' })
}
exports.regformrecord = async (req, res) => {
    const { email, pass } = req.body
    let changepass = await bcrypt.hash(pass, 10)
    const record = new Reg({ username: email, password: changepass })
    record.save()
    console.log(record)
    res.render('reg.ejs', { message: 'successfully User has been Created' })
}

exports.loginrecord = async (req, res) => {
    const { email, pass } = req.body
    try{
    const record = await Reg.findOne({ username: email })
    //console.log(record)
    if (record !== null) {
        const passwordcompare = await bcrypt.compare(pass, record.password)
        if (passwordcompare) {
            res.redirect('/parking')
        } else {
            res.render('login.ejs', { message: 'wrong Credentails' })
        }
    } else {
        res.render('login.ejs', { message: 'wrong Credentails' })
    }
}catch(error){
    res.render('login.ejs', {message:error.message})
}
}