
const express = require('express')
const {createServer} = require('http')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')

const normalizePort = port =>  parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 8080)

const app = express()

recipes = 
[
    {
        "id": 1,
        "name": "peanut butter and jelly sandwidtch",
        "ingredients": ['peanut butter', 'jelly', 'bread']
    },
    {
        "id": 2,
        "name": "buckeyes",
        "ingredients": ['chocolate', 'peanut butter', 'sugar']
    },
    {
        "id": 3,
        "name": "hawaiian pizza",
        "ingredients": ['cheese', 'pizza dough', 'tomato sauce','pineaple', 'bacon']
    },
    {
        "id": 4,
        "name": "hot chocolate",
        "ingredients": ['milk', 'chocolate', 'sugar']
    },
    {
        "id": 5,
        "name": 'grilled cheese sandwitch',
        "ingredients": ["cheese", "bread"]
    }   
]

const dev = app.get('env') !== 'production'

if (!dev){
    app.disable('x-powered-by')
    app.use(compression())
    app.use(morgan('common'))
    app.use(express.static(path.resolve(__dirname, 'build')))

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}
if (dev){
    app.use(morgan('env'))
}

app.get('/api/recipe', (req, res)=>{
    res.json(recipes)
})

const server = createServer(app)

server.listen(PORT, (err)=> {
    if(err) throw err
    console.log('server on')
    
})