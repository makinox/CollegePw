'use strict'

const $ = require('jquery')

let $container = $('#main-container')

let faded = () => {
  $('.overlay').fadeToggle(500)
  $('nav').toggleClass('visible').toggleClass('invisible')
  $container.toggleClass('gauss')
  $('.button i').toggleClass('btn-open').toggleClass('btn-close')
}

$.when($(document).ready(() => {
  // Quitando las cargas
  $container.find('.sk-cube-grid').empty()
  $('.relleno').remove()

  // Mostrando las vistas
  $container.fadeIn('slow')

  // Barra de navegacion
  $('.button a').click(faded)
  $('.overlay a').click(faded)

  // Sesion
  if (sessionStorage.getItem('nombre')) {
    let nombreSesion = sessionStorage.getItem('nombre')
    $('#header-container').find('.name').empty().html(nombreSesion)
  }


}))
