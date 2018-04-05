'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
const restrict = require('./../global/restrict')

page('/admin', (ctx, next) => {
  title('Utopia | Hola administrador')
  $.when($(document).ready(() => {
    $('#main-container').empty().append(template)
    restrict.global()

  }))
})
