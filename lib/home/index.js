'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
const restrict = require('./../global/restrict')

page('/home', (ctx, next) => {
  title('Utopia | Hola bienvenido')
  $.when($(document).ready(() => {
    $('#main-container').empty().append(template)
    restrict.global()
  }))
})
