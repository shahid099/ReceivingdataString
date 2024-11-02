import express from 'express';
const router =  express.Router();

// importing model 
import login from '../models/login.js';

// Creaing a New User
router.post('/signup', async (req, res)=> {
    try {
        const { name, email, password } = req.body;

        // Check if user already exist
        let user = await login.findOne({ email: email });
        if (user) {
            return res.status(401).send({ error: "You already created account with this email" });
          }

        // If a New User Then ==>  User Creating Here.
        user = new login({
            name: name,
            email: email,
            password: password
        });

        const savedUser =  await user.save();
        console.log("Successfully Saved user", savedUser);
        res.status(200).send({savedUser, message: "Successfully Saved user"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal Server error." });
    }
})
// Login if have Account 
router.post("/login", async (req, res)=> {
    try {

        const { email, password } = req.body;
        const user = await login.findOne({ email: email });

        // If user not Exists
        if (!user) {
              return res.status(401).send({ error: "Please try to login with correct credentials" });
            }
        // If user Exists then
        if(password == user.password) {
            res.status(200).send({ user, message:  " User login Successfully." });
        } else {
            return res.status(401).send({ success, error: "Please try to login with correct credentials" });
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal Server error." });
    }
})
// Get All the LogedIn Users
router.get('/barcodeusers', async(req, res) => {
    try {
        const user = await login.find();
        // console.log(user);
        res.send({ user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal Server error." });
    }
})


export default router;