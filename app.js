let express = require('express');
let app = express()

let oauth = require('./routes/oauth')

app.use('/oauth',oauth)
app.listen(5656,()=>{
    console.log(5656)
})