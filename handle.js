const handle = (req,res)=>{
    console.log(req.app.locals.title)
    res.send('this is home page for \'GET\' request ')
}

module.exports = handle