const express=require('express');
const mongoose=require("mongoose");
const cors=require('cors');
const  EmployeeModel= require( './models/employee');

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Employees")
app.post("/login",(req,res)=>{
    const {username,password}=req.body
    EmployeeModel.findOne({username:username})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.send("Incorect Password!")
            }
        }else{
            res.json("User not found")
        }
    })
})

// app.post('/register', (req, res) => {
//     const { username } = req.body;

//     // Check if the username already exists
//     EmployeeModel.findOne({ username })
//         .then(existingEmployee => {
//             if (existingEmployee) {
//                 // If the employee already exists, send an error response
//                 return res.status(400).json({ message: 'Username already exists' });
//             }

//             // If the username does not exist, create a new employee
//             return EmployeeModel.create(req.body);
//         })
//         .then(newEmployee => res.status(201).json(newEmployee))
//         .catch(err => res.status(500).json({ error: err.message }));
// });
app.post('/register',(req,res)=>{
       EmployeeModel.create(req.body)
       .then(employees=>res.json(employees))
       .catch(err=>res.json(err))
})

app.listen (3001,() =>{
    console.log("sever is upp and running");
    
})