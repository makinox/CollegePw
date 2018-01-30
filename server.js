let express = require('express')
let app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {res.render('index')})

app.listen(3000, (err) => {
    if (err) return console.log('Hubo un error'), process.exit(1)

    console.log('Utopia escuchando en el puerto 3000')
})