const Sequelize = require ('sequelize');

const FilmModel = require('./models/films')

const sequelize = new Sequelize('ixIzPmvFGs', 'ixIzPmvFGs','LTKIrfRe8D',{
    host:'remotemysql.com',
    dialect:'mysql'
});

const Film = FilmModel(sequelize, Sequelize)

sequelize.sync({force:false})
.then(() => {
    console.log('TABLAS SINCRONIZADAS')
})

module.exports = {
    Film
}