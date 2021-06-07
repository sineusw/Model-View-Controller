const User= require("./User")
const BlogPost= require("./BlogPost")
BlogPost.belongsTo(User,{
    foreignKey: "user_id", 
    onDelete: "CASCADE"
})
User.hasMany(BlogPost,{
    foreignKey: "user_id"
})
module.exports= {
    User,BlogPost
}