'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
let conect = require('./../global/index')
const $main = $('#main-container')

page('/signout', (ctx, next) => {
  title('Utopia | Registrate')

  $.when($(document).ready(() => {
    $main.empty().append(template)

    $main.find('#signout').on('submit', (ev) => {
      ev.preventDefault()
      let identificacion = $main.find('.identificacion').val().trim()
      let nombreEnt = $main.find('.nombreEnt').val().trim()
      let servicio = $main.find('.servicios').val().trim()
      let usuario = $main.find('.usuariob').val().trim()
      let contraseña = $main.find('.contraseñab').val().trim()
      let nombres = $main.find('.nombresb').val().trim()
      let apellidos = $main.find('.apellidosb').val().trim()
      let documento = $main.find('.documentob').val().trim()
      let email = $main.find('.emailb').val().trim()
      let rol = 'super'
      $.ajax({
        type: 'POST',
        url: `http://${conect.host}/enty`,
        data: {
          identificacion,
          nombreEnt,
          servicio
        },
        success: (data, textStatus, jqXHR) => {
          console.log(data)
        },
        error: (jqXHR, text, error) => {
          console.log(error)
        }
      })
      $.ajax({
        type: 'POST',
        url: `http://${conect.host}/users`,
        data: {
          usuario,
          contraseña,
          nombres,
          apellidos,
          email,
          rol,
          documento
        },
        success: (data, textStatus, jqXHR) => {
          console.log(data)
        },
        error: (jqXHR, text, error) => {
          console.log(error)
        }
      })
      page.redirect('/signin')
    })
  }))
})
