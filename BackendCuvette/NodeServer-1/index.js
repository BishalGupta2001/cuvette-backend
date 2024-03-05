//  this below code is without any frame work 
// but know we are going to use a frame work known as express.js
// const http = require('node:http');

// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
//     res.end("what is up guys");
// });

// server.listen (5000, () =>{
//     console.log('server runnig good');
// });

// http method 
// 1 get - reading purpose
// 2 post - creating purpose
// 3 put  - update purpose
// 4 delete - deleting  purpose

// this is using express framework
const express = require('express') // this line means we have imorted express
const app = express() // this line means creating a instance of a function

app.get('/', function (req, res) {
    res.send('Hello World finally its working &')
})

app.get('/human', function (req, res) {
    const human = [
        {
            name: 'Anant',
            age: '23',
            height: '5.4',
            img : "https://reqres.in/img/faces/1-image.jpg",
        },
        {
            name: 'Bishal',
            age: '22',
            height: '5.5',
            img : "https://reqres.in/img/faces/4-image.jpg",
        },
        {
            name: 'Priyanshu',
            age: '24',
            height: '5.6',
            img : "https://reqres.in/img/faces/3-image.jpg",
        },
        {
            name: 'Anushka',
            age: '25',
            height: '5.2', 
            img : "https://reqres.in/img/faces/2-image.jpg",
        },
    ]
    console.log(human);
    res.send(human);
})
app.get('/animal', function(req, res){
    const animal = [
        {
            name : 'Lion',
            color : 'golden',
             age: '35',
        },
        {
            name : 'Tiger',
            color : 'Black & golden',
             age: '55',
        },
        {
            name : 'Fox',
            color : 'Black',
             age: '23',
        },
    ]
    console.log(animal);
    res.send(animal);
})

app.get('/pet' , function(req, res){
    res.sendFile( __dirname+ '/index.html');
})
app.listen(4000, () => {
    console.log("server chalu che");
})
