const express = require("express");
const router = express.Router();

// router.get('/greeting', (req, res) => {
//   res.send('Birds home page');
// });
// ========================= 
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/register", (req, res) => {
  res.status(201).json({ message: "User registered successfully" });
});
// ========================= 

module.exports = router;
