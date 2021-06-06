const express = require ('express');
const morgan = require('morgan');
const cors = require('cors')

const apiRouter = require('./routes/api')
const app = express();

require('./db');

//config
app.set('nroPort', process.env.PORT || 3000);


//Midd
app.use(morgan('dev'));
app.use(express.json());

app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter)

//estatic

app.use(express.static(__dirname + '/public'))

app.listen(app.get('nroPort'),() => {
    console.log('port', app.get('nroPort'))
})