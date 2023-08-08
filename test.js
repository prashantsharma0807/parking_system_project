let todayDate=new Date()

let minute=todayDate.getMinutes()
let hour=todayDate.getHours()
let day=todayDate.getDay()
let month=todayDate.getMonth()
let year=todayDate.getFullYear()

let formet=(`${hour}:${minute} ${day}-${month+1}-${year}`)


console.log(typeof(formet))