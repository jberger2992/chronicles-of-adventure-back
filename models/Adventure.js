const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Adventure extends Model {}

Adventure.init(
    {

    },
    {
        sequelize,
    }
);

module.exports = Adventure;
