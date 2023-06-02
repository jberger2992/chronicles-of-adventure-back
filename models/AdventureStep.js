const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class AdventureStep extends Model {}

AdventureStep.init(
    {
        response: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        isFirstStep: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        option: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        previous: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
    }
);

module.exports = AdventureStep;
