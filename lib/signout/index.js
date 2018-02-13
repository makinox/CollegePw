'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')

page('/signout', (ctx, next) => {
  $('#main-container').empty().append(template)
})
