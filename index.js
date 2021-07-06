const express = require('express');

const app = express()


//middleware 
//>>express.static
// app.use(express.static(__dirname+'/public/',{
//     index : 'index.html'
// }))
//>>express.json
// app.use(express.json())  Content-Type:application/json
//>>express.row
// app.use(express.raw())  Content-Type:application/octet-stream
//>>express.urlencoded
// app.use(express.urlencoded())  Content-Type:application/x-www-form-urlencoded
//>>express.text
// app.use(express.text())  Content-Type:text/plain

app.get('/', (req,res)=>{
    res.send('this is home page for \'GET\' request ')
})
app.post('/', (req,res)=>{
    console.log(req.body)
    res.send('this is home page for post request ')
})
app.listen(3000, ()=>{
    console.log('wow server running in 3000')
})