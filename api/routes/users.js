import express from "express"

const router = express.Router()

router.get("/",(req,res) => {
    res.send("Inside api users")
})

export default router;