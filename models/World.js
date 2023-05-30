const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class World extends Model {}

World.init(
    {

    },
    {
        sequelize,
    }
);

module.exports = World;
