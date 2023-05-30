const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class World extends Model {}

World.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desription: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = World;
