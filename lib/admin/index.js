'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('title')

page('/admin', (ctx, next) => {
  title('Utopia | Hola administrador')
  $('#main-container').empty().append(template)
})
