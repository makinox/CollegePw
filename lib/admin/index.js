'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')

page('/admin', (ctx, next) => {
  title('Utopia | Hola administrador')
  $.when($(document).ready(() => {
    $('#main-container').empty().append(template)
  }))
})
