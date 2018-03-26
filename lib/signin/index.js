'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
let conect = {
  host: process.env.ip || '192.168.0.33:3001',
  id: ''
}
const $main = $('#main-container')

page('/signin', (ctx, next) => {
  title('Utopia | Ingresa')
  $main.empty().append(template)
  $main.find('#signina').on('submit', (ev) => {
    ev.preventDefault()

    let id = $main.find('.uAuth').val().trim()
    let ps = $main.find('.pAuth').val().trim()
    console.log(id)
    console.log(ps)
    $.ajax({
      url: `http://${conect.host}/auth/${id}&${ps}`,
      type: 'GET',
      success: async (data, textStatus, xhr) => {
        if (data === true) {
          // Redirigir a perfil
          // page.redirect()
          conect.id = id
          $.ajax({
            url: `http://${conect.host}/users/${conect.id}`,
            type: 'GET',
            success: async (data, textStatus, xhr) => {
              // console.log(data)
              await data.forEach(async (user) => {
                await $('#header-container').find('.name').empty().html(user.nombres)
              })
              console.log(data)
              console.log(textStatus)
              console.log(xhr)
            },
            error: (jqXHR, text, error) => {
              console.log(jqXHR)
              console.log(text)
              console.log(error)
            }
          })
        } else if (data === false) {
          console.log('intentelo de nuevo')
        } else {
          console.log('Algo paso')
        }
      }
    })
  })
})
module.exports = conect
