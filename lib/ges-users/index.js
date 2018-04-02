'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
let conect = require('./../signin/index')
const $main = $('#main-container')

page('/ges-users', (ctx, next) => {
  title('Utopia | Gestiona tus usuarios')
  $main.empty().append(template)

  $main.find('#ges-users').on('submit', (ev) => {
    ev.preventDefault()
    let idUsuario = $main.find('.idUsuario').val().trim()
    console.log(idUsuario)
    $('#ges-users').addClass('form-hide')
    $('#dbStatus').removeClass('form-hide2')
    //
    $main.find('.relev').remove()
    $.ajax({
      url: `http://${conect.host}/users/${idUsuario}`,
      type: 'GET',
      success: async (data, textStatus, xhr) => {
        await data.forEach(async (user) => {
          await $main.find('.nombresb').empty().html(`Nombre: <strong>${user.nombres}</strong>`)
          await $main.find('.apellidosb').empty().html(`Apellidos: <strong>${user.apellidos}</strong>`)
          await $main.find('.usuariob').empty().html(`Usuario: <strong>${user.usuario}</strong>`)
          await $main.find('.contraseñab').empty().html(`Contraseña: <strong>${user.contraseña}</strong>`)
          await $main.find('.emailb').empty().html(`Email: <strong>${user.email}</strong>`)
          await $main.find('.rolb').empty().html(`Rol: <strong>${user.rol}</strong>`)
          await $main.find('.documentob').empty().html(`Documento: <strong>${user.documento}</strong>`)
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

    // En caso de que quiera modificar
    $main.find('.modificarId').on('click', (ev) => {
      ev.preventDefault()
      $('#dbForm').removeClass('form-hide')
      // Formulario de modificacion
      $main.find('#dbForm').on('submit', (ev) => {
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
          type: 'PUT',
          url: `http://${conect.host}/users/${idUsuario}`,
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

    // En caso de que se quiera borrar
    $main.find('borrarId').on('click', (ev) => {
      ev.preventDefault()
      confirm('Está seguro de borrar los datos?')
      $.ajax({
        type: 'DELETE',
        url: `http://${conect.host}/users/${idUsuario}`,
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
})
