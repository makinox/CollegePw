'use strict'

const express = require('express')
const app = express()
const compression = require('compression')

// Inicializando el puerto dinamico local y el de heroku
app.set('port', (process.env.PORT || 5000))

// Se le dice a express que escoga pug como motor de vistas
app.set('view engine', 'pug')

// Middlewares

// Midleware que comprimira los archivos
app.use(compression())

// Middleware que le dice a express que los archivos que se van a utilizar estan en la carpeta public
app.use(express.static('public'))

// Generando las paginas
// Get de pagina raiz || root
app.get('/', (req, res) => { res.render('index', {title: 'Utopia | Mejorando la calidad de educacion'}) })

// Get de la pagina home
app.get('/home', (req, res) => { res.render('index', {title: 'Utopia | Hola! bienvenido'}) })

// Get de la pagina Inicio de sesion
app.get('/signin', (req, res) => { res.render('index', {title: 'Utopia | Ingresa'}) })

// Get de la pagina admin
app.get('/admin', (req, res) => { res.render('index', {title: 'Utopia | Hola administrador'}) })

// Get de la pagina de registro
app.get('/signout', (req, res) => { res.render('index', {title: 'Utopia | Registrarse'}) })

// Get de la pagina de perfil
app.get('/profile', (req, res) => { res.render('index', {title: 'Utopia | Tu perfil'}) })

// Get de las pagina generacion y gestion
app.get('/gen-academy', (req, res) => { res.render('index', {title: 'Utopia | Generar cursos'}) })
app.get('/gen-users', (req, res) => { res.render('index', {title: 'Utopia | Generar usuarios'}) })
app.get('/ges-academy', (req, res) => { res.render('index', {title: 'Utopia | Gestionar tus cursos'}) })
app.get('/ges-users', (req, res) => { res.render('index', {title: 'Utopia | Gestiona tus usuarios'}) })

// Montando el servidor en el puerto 5000
app.listen(app.get('port'), function () {
  console.log('Utopia corriendo en el puerto ', app.get('port'))
})
