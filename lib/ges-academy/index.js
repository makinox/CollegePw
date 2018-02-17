'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('title')

page('/ges-academy', (ctx, next) => {
  title('Utopia | Gestiona tus cursos')
  $('#main-container').empty().append(template)
})
