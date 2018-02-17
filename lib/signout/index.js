'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')

page('/signout', (ctx, next) => {
  title('Utopia | Registrate')
  $('#main-container').empty().append(template)
})
