const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const User = require("./db.js");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Ritesh:cYmTlvBhjwz50gUU@cluster0.z1cuupu.mongodb.net/")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const JWT_SECRET = "mysecretkey";


// ================= SIGNUP =================

app.post("/signup", async (req, res) => {

    try {

        const { username, password } = req.body;

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            password: hashedPassword
        });

        await user.save();

        res.json({
            message: "Signup Successful"
        });

    } catch (err) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});


// ================= SIGNIN =================

app.post("/signin", async (req, res) => {

    try {

        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {

            return res.status(401).json({
                message: "Invalid Credentials"
            });

        }

        const matched = await bcrypt.compare(
            password,
            user.password
        );

        if (!matched) {

            return res.status(401).json({
                message: "Invalid Credentials"
            });

        }

        const token = jwt.sign(
            {
                username: user.username
            },
            JWT_SECRET
        );

        res.json({
            token
        });

    } catch (err) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});


// ================= PROTECTED ROUTE =================

app.get("/me", async (req, res) => {

    try {

        const token = req.headers.token;

        const decoded = jwt.verify(
            token,
            JWT_SECRET
        );

        const user = await User.findOne({
            username: decoded.username
        });

        res.json({
            username: user.username
        });

    } catch {

        res.status(401).json({
            message: "Invalid Token"
        });

    }

});


app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});