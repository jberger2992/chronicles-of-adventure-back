const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desription: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        characteristics: {
            type: DataTypes.TEXT,
        },
        age: {
            type: DataTypes.STRING,
        },
        sex: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
    }
);

module.exports = Character;
