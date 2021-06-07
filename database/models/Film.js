const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Film extends Model{}
Film.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,

},{
    sequelize,
    modelName: "film"
}
)

module.exports = Film;

