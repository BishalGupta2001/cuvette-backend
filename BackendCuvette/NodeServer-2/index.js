const express = require('express') // this line means we have imorted express
const app = express() // this line means creating a instance of a function
const ejs = require('ejs');// imported ejs

// this is array of object of data
const USERS = [{

    username: 'george',
    name: 'George blutch',
    email: 'george.bluth@reqres.in',
    profileImgUrl: 'https://reqres.in/img/faces/1-image.jpg',
    likeCoding: false
},
{
    username: 'jannet',
    name: 'jannet weaver ',
    email: 'jannet.weaver@reqres.in',
    profileImgUrl: 'https://reqres.in/img/faces/2-image.jpg',
    likeCoding: true
},
]

// as we are using ejs we have to inform our browser so we will set
// as our view engine is ejs so app.set view engine is ejs ;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World finally Node server 2 is working ')
})

app.get('/user/:username', (req, res) => {
    const { username } = req.params
    const userDetails = USERS.find((user) => user.username === username)
    res.render('users.ejs', userDetails);
    // console.error(`User with username '${username}' not found`);
    res.status(404).send('there is some error User not found ');


})

// isme v pura cure nahi hua hume bar abar ek hi chiz ko banana/likhna pad arha hai so now we will learn about ROUTING PARAM

// app.get('/user/george', (req, res) => {
//     res.render('users.ejs', {
//         name: 'George  blutch',
//         email: 'george.bluth@reqres.in',
//         profileImgUrl: 'https://reqres.in/img/faces/1-image.jpg',
//         likeCoding: false
//     })
// })

// app.get('/user/jannet', (req, res) => {
//     res.render('users.ejs', {
// name: 'jannet weaver ',
// email: 'jannet.weaver@reqres.in',
// profileImgUrl: 'https://reqres.in/img/faces/2-image.jpg',
// likeCoding: true
//     })
// })

// app.get('/user/jannet', (req, res) => {
//     res.render('users.ejs')
// })

// bina templete engines ka bana rahe the toh bar bar html file banana pad raha tha   kuch aise 
// app.get('/user/george', (req, res)=> {
//     res.sendFile(__dirname + '/george.html')
// })

// app.get('/user/jannet',  (req, res) => {
//     res.sendFile(__dirname + '/jannet.html')
// })

//  now we will use EJS  jo ki dyanmic rahega now we don't have to create multiple html file f  or a particular user 

app.listen(4000, () => {
    console.log("server chalu che -2 ");
})
