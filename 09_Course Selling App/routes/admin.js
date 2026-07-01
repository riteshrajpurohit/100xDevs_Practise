import { Router } from "express";
const adminRouter = Router();
import { adminModel, courseModel } from "../db.js";


import jwt from "jsonwebtoken";


adminRouter.post('/signup', async (req, res) => {
  const {email , password , firstName , lastName} =  req.body ;
   
   await adminModel.create({
      email , 
      password , 
      firstName , 
      lastName 
    })
    res.send('Admin SignUp Successfull')
  })

adminRouter.get('/signin', async (req, res) => {
   const { email , password } = req.body
    const admin = await adminModel.findOne({
      email : email ,
      password : password 
    })
    if (admin) {
        const token = jsonwebtoken.sign({
            id: admin._id,
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token: token
        })
    }
    else{res.status(403).json({
      message : "incorrect credential"
    })}
})

adminRouter.post('/course', (req, res) => {
  res.send('See Purchased Course')
})

adminRouter.put('/course', (req, res) => {
  res.send('See Purchased Course')
})

adminRouter.get('/course/bulk', (req, res) => {
  res.send('See Purchased Course')
})

export { adminRouter };