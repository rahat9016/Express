const express = require('express');
const app = express();
const admin = express()

admin.get('/', (req,res)=>{
    res.send('wow right now we are in admin page')
})

app.use('/admin', admin);

app.listen(3000, ()=>{
    console.log('server run in 3000 port')
})