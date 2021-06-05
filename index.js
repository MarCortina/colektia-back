const express = require ('express');
const apiRouter = require('./routes/api')
const app = express();

require('./db');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter)

app.listen(3000, ()=>{
    console.log('port 3000')
})