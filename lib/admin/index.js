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
  if (sessionStorage.getItem('rol')){
    let rolSesion = sessionStorage.getItem('rol')
    if (rolSesion === 'estudiante'){

      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.eUser').removeAttr('id')

    }else if (rolSesion === 'profesor'){

      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.pUser').removeAttr('id')

    }else if (rolSesion === 'administrador'){

      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.aUser').removeAttr('id')

    }else if (rolSesion === 'super'){

      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.aUser').removeAttr('id')

    }
  } else {
    page.redirect('/signin')
  }
  }))
})
