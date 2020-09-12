/***************************
 * Application entry point
 */

const express = require('express')
const morgan = require('morgan')
const homeRoutes = require('./routes/homeRoutes')
const eventRoutes = require('./routes/eventRoutes')
const teamRoutes = require('./routes/teamRoutes')
const app = express()

// Creates the server
class Server {
    constructor(){
        this.initMiddlewares()
        this.initRoutes()
    }

    // Initializes port and middlewares
    initMiddlewares(){
        app.listen(3000, () => console.log('Application started on port 3000'))
        app.set('view engine', 'ejs')
        app.use(express.static('../public'))
        app.use(express.urlencoded({extended: true}))
        app.use(morgan('dev'))
    }

    initRoutes(){
        app.use('/', homeRoutes)
        app.use('/events', eventRoutes)
        app.use('/team', teamRoutes)
    }
}

// Runs the server
new Server()