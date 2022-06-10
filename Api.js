import 'dotenv/config'

import express from "express";
import LoginModal from './LoginModal.js'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.get('/' , async (req , res ) => {
    res.json({message:'success'})
})


router.post('/login' , async (req , res ) => {

    // { username: '111', password: '111' }
    let data = req.body


    // let foundUser = await LoginModal.find({username:data.username})

     let token = await jwt.sign({
         userData : data.password
     } , process.env.MY_TOKEN)

     console.log('\n'+token+'\n');

     // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VybmFtZSI6InNhZGFzIiwicGFzc3dvcmQiOiJkYXNkIn0sImlhdCI6MTY1NDg1MjQyOX0.xLnp-fPmIzXjQEt5CXo0I87aneywPBqRQTyySui-sJ4


     try {
        
        let verifyTok = await jwt.verify(token , process.env.MY_TOKEN)
        
        console.log(verifyTok);
        res.json({'message' : verifyTok})

     } catch (error) {
         res.json({'Err' : error})
     }




    // if(foundUser.length === 0){
    //     let addUser = await LoginModal.insertMany(data)
    // }

    // console.log(foundUser);

    // res.json({message:'success' , e2e : token})
})






export default router