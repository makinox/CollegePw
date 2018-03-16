'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
let conect = require('./../global/index')
const $main = $('#main-container')

page('/signin', (ctx, next) => {
  title('Utopia | Ingresa')
  $main.empty().append(template)
  $main.find('#signina').on('submit', (ev) => {
    ev.preventDefault()

    let id = $main.find('.uAuth').val()
    let ps = $main.find('.pAuth').val()
    console.log(id)
    console.log(ps)
    $.ajax({
      url: `http://${conect.host}/auth/${id}&${ps}`,
      type: 'GET',
      success: async (data, textStatus, xhr) => {
        if (data === true) {
          // Redirigir a perfil
          page.redirect()
          console.log('Pasaste')
          conect.id = id
        } else if (data === false) {
          console.log('intentelo de nuevo')
        } else {
          console.log('Algo paso')
        }
      }
    })
  })
})
