'use strict'

const $ = require('jquery')
// const page = require('page')

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
  // $('.logo').click(() => {
  //   page.redirect('./')
  // })
  // $('.signinl').click(() => {
  //   page.redirect('./signin')
  // })
  // $('.homel').click(() => {
  //   page.redirect('./home')
  // })
  // $('.signoutl').click(() => {
  //   page.redirect('./signout')
  // })
  // $('.adminl').click(() => {
  //   page.redirect('./admin')
  // })
  // $('.gen-academy').click(() => {
  //   page.redirect('./gen-academy')
  // })
  // $('.gen-users').click(() => {
  //   page.redirect('./gen-users')
  // })
  // $('.ges-academy').click(() => {
  //   page.redirect('./ges-academy')
  // })
  // $('.ges-users').click(() => {
  //   page.redirect('./ges-users')
  // })
})

// Transitions
// Base
// page.base('/')

// page('*', (ctx, next) => {
//   if (ctx.init) {
//     next()
//   } else {
//     $.classList.add('transition')
//     setTimeout(() => {
//       $.classList.remove('transition')
//       next()
//     }, 300)
//   }
// })
