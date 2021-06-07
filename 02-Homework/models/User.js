const {Model, DataTypes}=  require("sequelize")
const sequelize = require("../config/connection")
class User extends Model {}
User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    },
    {
        sequelize,
        timestamps: true,
        modelName: "user",
        underscored: true,

    },
)

module.exports= User