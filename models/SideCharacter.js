const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SideCharacter extends Model {}

SideCharacter.init(
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

module.exports = SideCharacter;
