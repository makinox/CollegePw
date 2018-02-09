'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')

page('/admin/gen-academy', (ctx, next) => {
  $('#main-container').append(template)
})
