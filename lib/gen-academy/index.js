'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')

page('/gen-academy', (ctx, next) => {
  $('#main-container').empty().append(template)
})