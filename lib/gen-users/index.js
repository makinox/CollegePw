'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
let conect = require('./../global/index')
const $main = $('#main-container')

page('/gen-users', (ctx, next) => {
  // Generando las vistas
  title('Utopia | Genera nuevos usuarios')
  $main.empty().append(template)

  // Cuando requramos el usuario
  $main.find('#gen-users').on('submit', (ev) => {
    ev.preventDefault()
    let nombres = $main.find('.nombresa').val().trim()
    let apellidos = $main.find('.apellidosa').val().trim()
    let contraseña = $main.find('.contraseñaa').val().trim()
    let email = $main.find('.emaila').val().trim()
    let rol = $main.find('.rola').val()
    let usuario = $main.find('.usuarioa').val()
    let documento = $main.find('.documentoa').val()
    if (rol == null) {
      return console.log('Seleccionar un rol valido')
    }
    $.ajax({
      type: 'POST',
      url: `http://${conect.host}/users`,
      data: {
        nombres,
        apellidos,
        contraseña,
        email,
        rol,
        usuario,
        documento
      },
      success: (data, textStatus, jqXHR) => {
        console.log(data)
        console.log(textStatus)
        console.log(jqXHR)
      },
      error: (jqXHR, text, error) => {
        console.log(jqXHR)
        console.log(text)
        console.log(error)
      }
    })
  })
})
