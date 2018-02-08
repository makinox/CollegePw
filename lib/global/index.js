'use strict'

const $ = require('jquery')

let faded = () => {
  $('.overlay').fadeToggle(500)
  $('nav').toggleClass('visible')
  $('#main-container').toggleClass('gauss')
  $('.button i').toggleClass('btn-open').toggleClass('btn-close')
}

$(document).ready(() => {
  $('.button a').click(faded)
  $('.overlay a').click(faded)
})
