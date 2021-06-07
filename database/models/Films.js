const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Films extends Model{}
Films.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,

},{
    sequelize,
    modelName: "film"
}
)

module.exports = Films;

