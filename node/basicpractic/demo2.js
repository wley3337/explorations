var fs = require('fs')

fs.readdir('/Users/willley', (err,data)=>{
    console.log(data)
})

var data={
    name: "Bob"
}

fs.writeFile('data2.json', JSON.stringify(data), (err)=>{console.log('write finished', err)} )