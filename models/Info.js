const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Info extends Model {}

Info.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Info;
