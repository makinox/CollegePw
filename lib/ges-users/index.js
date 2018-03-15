'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
const $main = $('#main-container')

page('/ges-users', (ctx, next) => {
  title('Utopia | Gestiona tus usuarios')
  $main.empty().append(template)

  $main.find('#ges-users').on('submit', (ev) => {
    ev.preventDefault()
    let idUsuario = $main.find('.idUsuario').val()
    console.log(idUsuario)
    $('#ges-users').addClass('form-hide')
    $('#dbStatus').removeClass('form-hide')
    $('#dbForm').removeClass('form-hide')
    $main.find('.relev').remove()
  })
})
