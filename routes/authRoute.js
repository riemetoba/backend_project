const express = require("express");
const router = express.Router();

// router.get('/registration', (req, res) => {
//  return res.send('Birds home page');
// });

router.post("/sendotp", async(req, res) => {
 const {email} = req.body
});
 

module.exports = router;
