const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class AdventureStep extends Model {}

AdventureStep.init(
    {
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
        }
    },
    {
        sequelize,
    }
);

module.exports = AdventureStep;
