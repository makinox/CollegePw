'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')

page('/admin', (ctx, next) => {
  title('Utopia | Hola administrador')
  $.when($(document).ready(() => {
    $('#main-container').empty().append(template)

    // Asignando las carateristicas de los usuarios
      let rolSesion = sessionStorage.getItem('rol')
      if (rolSesion === 'estudiante') {
        $('body').find('.eUser').removeAttr('id')
      } else if (rolSesion === 'profesor') {
        $('body').find('.pUser').removeAttr('id')
      } else if (rolSesion === 'administrador') {
        $('body').find('.aUser').removeAttr('id')
      } else if (rolSesion === 'super') {
        $('body').find('.aUser').removeAttr('id')
      }
  }))
})
