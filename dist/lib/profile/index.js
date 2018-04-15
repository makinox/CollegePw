'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
const restrict = require('./../global/restrict')
let conect = require('../signin/index')

page('/profile', (ctx, next) => {
  title('Utopia | Tu perfil')

  $.when($(document).ready(() => {
    $('#main-container').empty().append(template)
    restrict.global()
      // Poniendo el usuario logeado
    $.ajax({
      url: `http://${conect.host}/users/${sessionStorage.getItem('id')}`,
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
                      let i = 0
                      data.forEach(async (asignatura) => {
                      // LLenando la tabla de notas recientes
                        i++
                        await $('#main-container').find('#recent').append(`
                      <tr>
                        <th scope="row">${i}</th>
                        <td>${asignatura.nombreCurso}</td>
                        <td>${asert.nota1}</td>
                      </tr>
                      `)
                        let j = 0
                        if (asignatura.nombreCurso !== aux) {
                          aux = asignatura.nombreCurso
                          j++
                        // LLenando la tabla de clases
                          await $('#main-container').find('#clases').append(`
                        <tr>
                          <th scope="row">${j}</th>
                          <td>${asignatura.nombreCurso}</td>
                          <td>${asignatura.curso}</td>
                        </tr>
                        `)
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
    // Promedio
    $.ajax({
      url: `http://${conect.host}/eve/${sessionStorage.getItem('id')}`,
      type: 'GET',
      success: async (dataPro, textStatus, xhr) => {
        console.log(dataPro)
        dataPro.forEach(async (prom) => {
          console.log(prom)
          await $('#main-container').find('#promedio').append(`
          <tr>
            <th scope="row">${prom.nota}</th>
          </tr>
        `)
        })
      }
    })
  }))

  // Requiriendo las notas de las materias
  // $.ajax({
  //   url: `http://${conect.host}/est/&{}`
  // })
})