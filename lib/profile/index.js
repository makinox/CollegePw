'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
let conect = require('../signin/index')

page('/profile', (ctx, next) => {
  title('Utopia | Tu perfil')
  $('#main-container').empty().append(template)

  // Poniendo el usuario logeado
  $.ajax({
    url: `http://${conect.host}/users/${conect.id}`,
    type: 'GET',
    success: async (data, textStatus, xhr) => {
      console.log(data)
      console.log(data.usuario)
      await data.forEach(async (user) => {
        await $('#main-container').find('.apellidos').empty().html(`${user.nombres} ${user.apellidos}`)

        // Cuando tenga el usuario hacer la peticion
        if (user.usuario) {
          $.ajax({
            url: `http://${conect.host}/est/${user.usuario}`,
            type: 'GET',
            // Requiriendo las notas de las materias
            success: async (data, textStatus, xhr) => {
              await data.forEach(async (asert) => {
                // Requiriendo el nombre de la materia
                $.ajax({
                  url: `http://${conect.host}/subjects/${asert.idAsignaturas}`,
                  type: 'GET',
                  success: async (data, textStatus, xhr) => {
                    let aux = ''
                    data.forEach(async (asignatura) => {
                      await $('#main-container').find('#recent').append(`<p><strong>${asignatura.nombreCurso}:</strong> ${asert.nota1}</p>`)
                      if (asignatura.nombreCurso !== aux) {
                        aux = asignatura.nombreCurso
                        await $('#main-container').find('#clases').append(`<p><strong>${asignatura.nombreCurso}:</strong> ${asignatura.curso}</p>`)
                      }
                    })
                  }
                })
              })
            }
          })
        }
      })
    }
  })

  // Requiriendo las notas de las materias
  // $.ajax({
  //   url: `http://${conect.host}/est/&{}`
  // })
})
