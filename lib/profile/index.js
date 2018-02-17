'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('title')

page('/profile', (ctx, next) => {
  title('Utopia | Tu perfil')
  $('#main-container').empty().append(template)
})
