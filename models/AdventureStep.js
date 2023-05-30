const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class AdventureStep extends Model {}

AdventureStep.init(
    {

    },
    {
        sequelize,
    }
);

module.exports = AdventureStep;
