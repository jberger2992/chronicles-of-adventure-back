const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Adventure extends Model {}

Adventure.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desription: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        opening: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
    }
);

module.exports = Adventure;
