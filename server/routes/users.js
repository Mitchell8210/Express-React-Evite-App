const router = require("express").Router()

const NotGoing = [

]
const going =[

]

router.post('/going', (req,res,next)=>{
  const id = going.length +1
  const user = req.body.user
  user.id = id

  going.push(user)
  res.json(user)
})

router.post('/notgoing', (req,res,next)=>{
  const id = NotGoing.length +1
  const user = req.body.user
  user.id = id

  NotGoing.push(user)
  res.json(user)
})

router.get("/going", (req, res, next) => {
  res.json(going)
})

router.get("/notgoing", (req, res, next) => {
  res.json(NotGoing)
})

router.delete('/users',(req,res,next)=>{
  going.length = 0
  NotGoing.length = 0
  res.json("cleared all guests from list")
})
module.exports = router
