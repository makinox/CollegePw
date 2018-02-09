'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')

page('/admin/gen-users', (ctx, next) => {
  $('#main-container').append(template)
})
