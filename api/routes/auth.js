import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Inside auth route")
})

router.get("/register", (req,res)=>{
    res.send("Inside auth register route")
})
export default router