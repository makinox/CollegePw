'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
let conect = {
  second: '172.28.32.250:3001',
  host: process.env.ip || '172.28.32.250:3001',
  id: '',
  nombre: '',
  rol: '',
  idEnt: ''
}
const $main = $('#main-container')

page('/signin', (ctx, next) => {
  title('Utopia | Ingresa')
  $.when($(document).ready(() => {
    $main.empty().append(template)

    if (sessionStorage.getItem('id')) {
      conect.id = sessionStorage.getItem('id')
      conect.nombre = sessionStorage.getItem('nombre')
      $('#header-container').find('.name').empty().html(conect.nombre)
      page.redirect('/profile')
    }

    $main.find('#signina').on('submit', (ev) => {
      ev.preventDefault()

      let id = $main.find('.uAuth').val().trim()
      let ps = $main.find('.pAuth').val().trim()
      console.log(id)
      console.log(ps)
      try {
        $.ajax({
          url: `http://${conect.host}/auth/${id}&${ps}`,
          type: 'GET',
          success: async (data, textStatus, xhr) => {
            if (data === true) {
              // Redirigir a perfil y asignar los datos del usuario al objeto global
              conect.id = id
              $.ajax({
                url: `http://${conect.host}/users/${conect.id}`,
                type: 'GET',
                success: async (data, textStatus, xhr) => {
                  // console.log(data)
                  await data.forEach(async (user) => {
                    await $('#header-container').find('.name').empty().html(user.nombres)
                    await sessionStorage.setItem('nombre', user.nombres)

                    // Asignando las carateristicas de los usuarios
                    await $('#header-container').find('.menuGen').attr('id', 'wUser')
                    await sessionStorage.setItem('rol', user.rol)
                    let rolSesion = user.rol
                    console.log(`rol sesion ${rolSesion}`)
                    console.log(`tipo rolsesion ${typeof (rolSesion)}`)
                    if (rolSesion === 'estudiante') {
                      await $('#header-container').find('.menuGen').attr('id', 'wUser')
                      await $('body').find('.eUser').removeAttr('id')
                    } else if (rolSesion === 'profesor') {
                      await $('#header-container').find('.menuGen').attr('id', 'wUser')
                      await $('body').find('.pUser').removeAttr('id')
                    } else if (rolSesion === 'administrador') {
                      await $('#header-container').find('.menuGen').attr('id', 'wUser')
                      await $('body').find('.aUser').removeAttr('id')
                    } else if (rolSesion === 'super') {
                      await $('#header-container').find('.menuGen').attr('id', 'wUser')
                      await $('body').find('.aUser').removeAttr('id')
                    }
                  })
                  sessionStorage.setItem('id', conect.id)
                  page.redirect('/profile')
                },
                error: (jqXHR, text, error) => {
                  console.log(error)
                }
              })
            } else if (data === false) {
              alert('Usuario incorrecto \nIntentelo de nuevo')
            } else {
              alert('Algo paso \nSi sigue experimentando problemas, oprima el botón verde')
            }
          }
        })
      } catch (error) {
        alert('Algo paso \nSi sigue experimentando problemas, oprima el botón verde')
      }
    })
  }))
})
module.exports = conect
