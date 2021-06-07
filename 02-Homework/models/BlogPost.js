const {Model, DataTypes}=  require("sequelize")
const sequelize = require("../config/connection")
class BlogPost extends Model {}
BlogPost.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
    }, 
    content: {
        type: DataTypes.TEXT
    },

    },
    {
        sequelize,
        timestamps: true,
        modelName: "blogPost",
        

    }
)

module.exports= BlogPost