const $ = require('jquery')
let template = require('./template')
const $main = $('html')
$main.addClass('mainer')
$('head').append(template)

$.when($main.ready(() => {
  $main.removeClass('mainer')
}))
