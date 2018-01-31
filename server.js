let express = require('express')
let app = express()

//Se le dice a express que escoga pug como motor de vistas
app.set('view engine', 'pug')

//Middleware que le dice a express que los archivos que se van a utilizar estan en la carpeta public
app.use(express.static('public'))

//Get de pagina home
app.get('/', (req, res) => {res.render('index')})

//Montando el servidor en el puerto 3000
app.listen(3000, (err) => {
    if (err) return console.log('Hubo un error'), process.exit(1)

    console.log('Utopia escuchando en el puerto 3000')
})