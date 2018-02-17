'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('title')

page('/signin', (ctx, next) => {
  title('Utopia | Ingresa')
  $('#main-container').empty().append(template)
})
