const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const sequelize = require('./database/db');


const apiRouter = require('./routes/api')
const app = express();


//config
app.set('PORT', process.env.PORT || 3000);


//Midd
app.use(morgan('dev'));
app.use(express.json());

app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter)

//estatic

app.use(express.static(__dirname + '/public'))

app.listen(app.get('PORT'), () => {
    console.log('port', app.get('PORT'))

    sequelize.sync({ force: false }).then(() => {
        console.log('database conectada')
    }).catch(err => {
        console.log(err, 'no se conecto a la database')
    })
})