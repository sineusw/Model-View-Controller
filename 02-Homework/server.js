const express = require('express')
const app = express()
const sequelize = require("./config/connection")
const userRoutes = require("./controllers/user-routes"); 
const session = require('express-session');
var exphbs  = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store)

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const appSess = {
    secret: 'My db secret', 
    cookie: {},
    resave: false,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(appSess));
app.use(express.static('public'))
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoutes)

sequelize.sync().then(() => { app.listen(PORT, () => console.log('Now listening')); });

