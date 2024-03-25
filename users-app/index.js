// express
const express = require('express')
const app = express()

// dotenv
const dotenv = require('dotenv')
dotenv.config()

// node moduls
const path = require("path")
const session = require('express-session')
const cookieParser = require('cookie-parser')
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// custom module
const sequelize = require("./data/db")
const locals = require("./middleware/locals")

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
app.use(session({
    secret: 'Secret_Keyssss',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        // secure: true     // https protokolu gereklidir --- ssl veya tls sertifikanız varsa kullanmanız şiddetle tavsiye edilir
    },
    store: new SequelizeStore({
        db: sequelize
    })
}))
app.use(locals)

// path
app.use("/public", express.static(path.join(__dirname, "public")))
app.use("/usersProfilles", express.static(path.join(__dirname, "usersProfilles")))
app.use("/libs", express.static(path.join(__dirname, "node_modules")));


// run the function only once to create the tables
// const dummy = require("./data/dummy-data")
// dummy()


// engine
app.set("view engine", "ejs")

// Routers
const auth = require("./router/auth")
const userRouter = require("./router/userRouter")
const typeJSON = require("./router/typeJSON")

app.use("/site", auth)
app.use("/site", userRouter)
app.use("/", typeJSON)

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT} =>  http://localhost:${process.env.PORT}/site/users`))