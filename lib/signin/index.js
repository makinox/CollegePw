'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')

page('/signin', (ctx, next) => {
  $('#main-container').append(template)
})
