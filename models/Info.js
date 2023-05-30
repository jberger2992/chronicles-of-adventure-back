const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Info extends Model {}

Info.init(
    {

    },
    {
        sequelize,
    }
);

module.exports = Info;
