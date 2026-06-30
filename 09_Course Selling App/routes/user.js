import { Router } from "express";

const userRouter = Router();

userRouter.post('/signup', (req, res) => {
  res.send('User Login')
})

userRouter.post('/signin', (req, res) => {
  res.send('User Signup')
})

userRouter.get('/purchases', (req, res) => {
  res.send('User Puchased a Course')
})

module.exports = {
    userRouter : userRouter
}