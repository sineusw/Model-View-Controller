const {Model, DataTypes}=  require("sequelize")
const bcrypt=require('bcrypt')
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
        unique: true,
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    },
    
    {
hooks: {
    beforeCreate: async (userData)=> {
        userData.password = await bcrypt.hash(userData.password, 10); 
        return userData;
    }, 

    beforeUpdate: async (userData)=> {
        userData.password = await bcrypt.hash(userData.password, 10); 
        return userData;
    }, 
},

        sequelize,
        timestamps: true,
        modelName: "user",
        underscored: true,

    },
)

module.exports= User