const router=require('express').Router()
const regc=require('../controllers/regcontroller')
const parkingc= require('../controllers/parkingcontroller')


router.get('/',regc.loginform)
router.post('/',regc.loginrecord)

router.get('/reg',regc.regform)
router.post('/reg',regc.regformrecord)

router.get('/parking',parkingc.parkingdetails)
router.get('/addnew',parkingc.newparking)
router.post('/addnew',parkingc.add)

router.get('/parkingupdate/:id',parkingc.pupdate)

router.get('/print/:id',parkingc.print)





module.exports=router