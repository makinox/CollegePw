'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
let conect = require('./../global/index')
const $main = $('#main-container')

page('/gen-users', (ctx, next) => {
  title('Utopia | Genera nuevos usuarios')
  $main.empty().append(template)
  $main.find('#gen-users').on('submit', (ev) => {
    ev.preventDefault()
    let nombres = $main.find('.nombresa').val()
    let apellidos = $main.find('.apellidosa').val()
    let contraseña = $main.find('.contraseñaa').val()
    let email = $main.find('.emaila').val()
    let rol = $main.find('.rola').val()
    if (rol == null) {
      return console.log('Seleccionar un rol valido')
    }
    console.log(nombres)
    console.log(apellidos)
    console.log(contraseña)
    console.log(email)
    console.log(rol)
    $.ajax({
      type: 'POST',
      url: `http://${conect.host}/users`,
      data: {
        nombres,
        apellidos,
        contraseña,
        email,
        rol
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
