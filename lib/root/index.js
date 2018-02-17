'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('title')

page('/', (ctx, next) => {
  title('Utopia | Mejorando la calidad de educacion')
  $('#main-container').empty().append(template)
})
