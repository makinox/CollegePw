'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')

page('/ges-users', (ctx, next) => {
  title('Utopia | Gestiona tus usuarios')
  $('#main-container').empty().append(template)
})
