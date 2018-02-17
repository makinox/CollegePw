'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('title')

page('/home', (ctx, next) => {
  title('Utopia | Hola bienvenido')
  $('#main-container').empty().append(template)
})
