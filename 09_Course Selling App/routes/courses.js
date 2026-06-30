import { Router } from "express";

const courseRouter = Router();

courseRouter.post('/purchase', (req, res) => {
  res.send('See All Course')
})

courseRouter.get('/preview ', (req, res) => {
  res.send('See Purchased Course')
})

module.exports = {
    courseRouter : courseRouter
}