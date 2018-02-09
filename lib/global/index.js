'use strict'

const $ = require('jquery')
const page = require('page')

let $container = $('#main-container')

let faded = () => {
  $('.overlay').fadeToggle(500)
  $('nav').toggleClass('visible').toggleClass('invisible')
  $container.toggleClass('gauss')
  $('.button i').toggleClass('btn-open').toggleClass('btn-close')
}

$.when($container.ready).then(() => {
  // Quitando las cargas
  $('#spinner').fadeOut('slow')
  $('.relleno').remove()

  // Mostrando las vistas
  $container.fadeIn()

  // Barra de navegacion
  $('.button a').click(faded)
  $('.overlay a').click(faded)

  // Redireccion
  $('.signinl').click(() => {
    page.redirect('./signin')
  })
  $('.homel').click(() => {
    page.redirect('./home')
  })
  $('.signoutl').click(() => {
    page.redirect('./signout')
  })
})
