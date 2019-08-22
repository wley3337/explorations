const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static(__dirname))
app.use(bodyParser.json())
var messages =[
    {name: 'Tim', message: "hi"},
    {name: 'Will', message: "hello"}
]
app.get('/messages', (req,res)=>{
    res.send(messages)
})

app.post('/messages', (req,res)=>{
    console.log(req.body)
    res.sendStatus(200)

})



let server= app.listen(3000, ()=>{
    console.log('server is listening on port: ', server.address().port )
})




