//This is  a  sever syntax

//1 . importing express
const express = require("express");
const cors= require("cors")
var CourseInfo = require("./model/courseDB");//Import db

// 2.initializing new express application
const app = new express();

//body Parameter
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// //CORS Policy
// app.use((req,res,next) => {
//     res.setHeader("Access-Control-Allow-Orgin","*");
//     res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
//     res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
//     res.setHeader("Access-Control-Allow-Credentials",true);
// })

// 3.creating API
app.get('/',(req,res) =>{
    res.send("Congrtulations")
});
app.get('/about',(req,res) =>{
    res.send("About Page1")
});
app.get("/json",(req,res) => {
    res.json([{"name": "Jolly"}, {"place":"tvm"}]);
});
app.post("/facebook/signup",(req,res) => {
    res.send(`Hi ${req.body.FirstName} ${req.body.LastName}, your account is sucessfully created.`);
   
});


//Course Creation
app.post("/course/create",(req,res) =>{
 var course =  new CourseInfo(req.body);//passing to db
 course.save();//saving to db
 res.send("Couse Added Successfully");
})

app.get("/course/view",async(req,res) =>{
var result = await CourseInfo.find();
res.json(result);
})

//Couse Update
app.post("/course/update",async (req,res) => {
var result = await CourseInfo.findByIdAndUpdate(req.body._id,req.body);
res.json(result);
})

//Course Delete
app.post("/course/delete",async (req,res) => {
var result = await CourseInfo.findByIdAndDelete(req.body._id);
 res.send("Successsfully Deleted");
})

// 4.setting PORT number
app.listen(5000,() => {
    console.log("Server is running on PORT 5000");
});