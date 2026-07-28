const express = require("express");
const router = express.Router();

// router.get('/registration', (req, res) => {
//  return res.send('Birds home page');
// });

router.post("/sendotp", async(req, res) => {
 const {email} = req.body

 if (!email) {
    res.status(400).json({
        success: false,
        message: "Email is required"
    })
    
 }
});
 

module.exports = router;
