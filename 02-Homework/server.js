const express = require('express')
const app = express()
const sequelize = require("./config/connection")
const htmlRoutes = require("./controllers/htmlRoutes")
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'))
const PORT = process.env.PORT || 3001;
app.use("/", htmlRoutes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.sync().then(() => { app.listen(PORT, () => console.log('Now listening')); });

