const { Sequelize } = require('sequelize');
const { database } = require("../config")


const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password,{
        host: database.host,
        dialect:"mysql"
    }
)

// const Film = FilmModel(sequelize, Sequelize)

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log('TABLAS SINCRONIZADAS')
//     })

module.exports = sequelize