'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('title')

page('/gen-users', (ctx, next) => {
  title('Utopia | Genera nuevos usuarios')
  $('#main-container').empty().append(template)
})
