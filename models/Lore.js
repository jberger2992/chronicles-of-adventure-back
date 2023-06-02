const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Lore extends Model {}

Lore.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Lore;
