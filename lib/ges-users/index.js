'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')

page('/ges-users', (ctx, next) => {
  $('#main-container').empty().append(template)
})