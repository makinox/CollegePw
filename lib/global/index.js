'use strict'

const $ = require('jquery')
const page = require('page')

let faded = () => {
  $('.overlay').fadeToggle(500)
  $('nav').toggleClass('visible')
  $('#main-container').toggleClass('gauss')
  $('.button i').toggleClass('btn-open').toggleClass('btn-close')
}

$(document).ready(() => {
  $('.button a').click(faded)
  $('.overlay a').click(faded)
  // Redireccion
  $('.signinl').click(() => {
    page.redirect('./signin')
  })
  $('.homel').click(() => {
    page.redirect('./home')
  })
  $('.signout').click(() => {
    page.redirect('./sigout')
  })
})
