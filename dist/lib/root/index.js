'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')

page('/', (ctx, next) => {
  title('Utopia | Mejorando la calidad de educacion')
  $.when($(document).ready(() => {
    $('#main-container').empty().append(template)
  }))
})