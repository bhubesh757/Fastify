const fastify = require('fastify')({
    logger : true
})
// from routes

const routes = require('./routes')

// db

const mongoose = require('mongoose')

// db conections

mongoose.connect('monogodb://localhost/fastifypro')
.then( () => console.log('mongo is Ready !!'))
.catch(
    err => console.log(err)
)

// routes

fastify.get('/' , async(request , reply) => {
    return {visitor : 'instagram.com'}
})

routes.forEach((route , index) => {
    fastify.route(route)
} )

// starting server
const start  = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`Server is running at ${address}`)
    }catch (error){

    }

    
}

start()
