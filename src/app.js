/***************************
 * Application entry point
 */

const express = require('express')
const morgan = require('morgan')
const normalizePort = require('normalize-port')
const homeRoutes = require('./routes/homeRoutes')
const eventRoutes = require('./routes/eventRoutes')
const teamRoutes = require('./routes/teamRoutes')
const contactRoutes = require('./routes/contactRoutes')
const app = express()

// Creates the server
class Server {
    constructor(){
        this.initMiddlewares()
        this.initRoutes()
    }

    // Initializes port and middlewares
    initMiddlewares(){
        const port = normalizePort(process.env.PORT || '3000')  // Normilizes port based on the environment
        app.listen(port, () => console.log('Application started'))
        app.set('views', __dirname + '/views')
        app.set('view engine', 'ejs')
        app.use(express.static('public')) // Change this to "app.use(express.static('../public'))" to run locally
        app.use(express.urlencoded({extended: true}))
        app.use(morgan('dev'))
    }

    initRoutes(){
        app.use('/', homeRoutes)
        app.use('/events', eventRoutes)
        app.use('/team', teamRoutes)
        app.use('/contact', contactRoutes)
    }
}

// Runs the server
new Server()