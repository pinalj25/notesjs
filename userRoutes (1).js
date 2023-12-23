import express from "express";
import { checkRegister } from "../middleware/auth.js";
import { deleteUser, getUser, register, updateUser, updateUser2 } from "../controllers/userController.js";

const router=express.Router();


router.post('/adduser',checkRegister,register)
router.get('/getUser',getUser)
router.put('/updateUser',updateUser)
router.put('/updateUser2',updateUser2)
router.delete('/deleteUser',deleteUser)




export default router;