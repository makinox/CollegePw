'use strict'

const page = require('page')
const $ = require('jquery')
const restrict = {}

restrict.global = async () => {
  if (sessionStorage.getItem('rol')) {
    $('#header-container').find('.name').empty().html(sessionStorage.getItem('nombre'))
    let rolSesion = sessionStorage.getItem('rol')
    if (rolSesion === 'estudiante') {
      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.eUser').removeAttr('id')
      if (!$('.eUser')) return page.redirect('/profile')
    } else if (rolSesion === 'profesor') {
      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.pUser').removeAttr('id')
      if (!$('.pUser')) return page.redirect('/profile')
    } else if (rolSesion === 'administrador') {
      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.aUser').removeAttr('id')
      if (!$('.aUser')) return page.redirect('/profile')
    } else if (rolSesion === 'super') {
      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.aUser').removeAttr('id')
      if (!$('.aUser')) return page.redirect('/profile')
    }

  } else {
    page.redirect('/signin')
  }
}

module.exports = restrict
