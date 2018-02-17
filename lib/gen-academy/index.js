'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')

page('/gen-academy', (ctx, next) => {
  title('Utopia | Genera nuevos cursos')
  $('#main-container').empty().append(template)
})
