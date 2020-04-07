//Node and Express Lecture

//requiring http module and saving it
let http = require('http');
//defining variables in parameters below
let portNumber = 8000;
let hostName = 'localhost';

//create server method on reference
let newServer = http.createServer((req,res) =>{
        res.end("My name is Mary");
    })

//Listening for our server on port 8000   
newServer.listen(8000, 'localhost', () =>{
    console.log(`Listening at ${hostName} on port ${portNumber}`);
});

//Another way to create a simple express server
//Create a reference to express module using require
let express = require('express');

//Create a server using the express method
let app = express();

//Create instructor array
let instructorArray=['Autumn','Kevin','Kenn'];

//Defining a route
app.get('/', (req,res)=>{
    res.send("This is a server using node and express")
})

//Adding a second route
app.get('/displayName',(req,res)=>{
    res.send("My name is Mary")
})

//Adding a third route
app.get('/instructor',(req,res)=>{
    res.send("Autumn is a Code School instructor")
})

//Adding a fourt route
app.get('/instructors',(req,res)=>{
    res.send("Kevin,Autumn, and Kenn are Code School instructors")
})

//Adding a fifth route
//:turns it into a variable that can be used 
app.get('/instructor/:id',(req,res)=>{
    //how to reference id inside parameter is below
    // req.params.id
    instructorArray.forEach((instructor,index)=>{
        if(index == req.params.id){
            res.send(`The instructor whose index position matches is ${instructor}`);
        }
    });
})

//listen on your server and add callback
app.listen(8000,()=>{
    console.log("Listening on port 8000")
})