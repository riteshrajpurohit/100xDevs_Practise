import { Router } from "express";
import {userModel} from "../db.js"
const userRouter = Router();
import jwt from "jsonwebtoken";



userRouter.post('/signup', async (req, res) => {
  const {email , password , firstName , lastName} =  req.body ; 
 
 await userModel.create({
    email , 
    password , 
    firstName , 
    lastName 
  })
  res.send('User SignUp Successfull')
})

userRouter.post ('/signin', async (req, res) => {
    const { email , password } = req.body
    const user = await userModel.findOne({
      email : email ,
      password : password 
    })
    if (user) {
        const token = jsonwebtoken.sign({
            id: user._id,
        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        })
    }
    else{res.status(403).json({
      message : "incorrect credential"
    })}
})

userRouter.get('/purchases', (req, res) => {
  res.send('User Puchased a Course')
})

export { userRouter };