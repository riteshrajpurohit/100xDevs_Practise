import { Router } from "express";

const adminRouter = Router();

adminRouter.post('/signup', (req, res) => {
  res.send('See All Course')
})

adminRouter.get('/signin ', (req, res) => {
  res.send('See Purchased Course')
})

adminRouter.get('/course ', (req, res) => {
  res.send('See Purchased Course')
})

adminRouter.put('/course ', (req, res) => {
  res.send('See Purchased Course')
})

module.exports = {
    adminRouter : adminRouter
}  