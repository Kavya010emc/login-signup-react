const express = require('express');
const cors = require("cors")

const server = express();

const username = "kavya"
const password = "1414";

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(3000);

server.get("/", (req, res) => {
    res.send("Server running....")
});

server.post('/login', (req, res) => {

    if(req.body.username === username && req.body.password === password){
        res.send(true);
    }
    else{
        res.send(false)
    }
    
})