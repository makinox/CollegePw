'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
let conect = require('./../signin/index')

page('/ges-academy', (ctx, next) => {
  let $main = $('#main-container')
  title('Utopia | Gestiona tus cursos')
  $main.empty().append(template)

  // Cuando haga ingrese la id de la materia
  $main.find('#ges-academy').on('submit', (ev) => {
    ev.preventDefault()
    $main.find('#ges-academy').addClass('form-hide')
    $main.find('#dbStatus2').removeClass('form-hide2')
    let idAsignaturas = $main.find('.idAsignaturas').val().trim()

    // Pidiendo esa materia
    $.ajax({
      url: `http://${conect.host}/subjects/${idAsignaturas}`,
      type: 'GET',
      success: async (data, textStatus, xhr) => {
        await data.forEach(async (subject) => {
          await $main.find('.nombresb').empty().html(`Curso: <strong>${subject.nombreCurso}</strong>`)
          await $main.find('.apellidosb').empty().html(`Periodo academico: <strong>${subject.periodo}</strong>`)
          await $main.find('.contraseñab').empty().html(`Grado: <strong>${subject.curso}</strong>`)
          await $main.find('.emailb').empty().html(`Codigo de curso: <strong>${subject.codigoG}</strong>`)
          // await $main.find('.rolb').empty().html(`Rol: <strong>${subject.rol}</strong>`)
          // await $main.find('.codigob').empty().html(`Codigo: <strong>${subject.codigo}</strong>`)
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

    // En caso que desee actualizar
    $main.find('.modificarId').on('click', (ev) => {
      ev.preventDefault()
      $('#dbForm').removeClass('form-hide')
      $main.find('#dbForm').on('submit', (ev) => {
        ev.preventDefault()
        let nombreCurso = $main.find('.nombreCursosa').val().trim()
        let periodo = $main.find('.periodosa').val().trim()
        let curso = $main.find('.gradosa').val().trim()
        let codigoG = $main.find('.codigoGa').val().trim()
        $.ajax({
          type: 'PUT',
          url: `http://${conect.host}/subjects/${idAsignaturas}`,
          data: {
            nombreCurso,
            periodo,
            curso,
            codigoG
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

    // En caso de que se desee borrar
    $main.find('.borrarId').on('click', (ev) => {
      ev.preventDefault()
      console.log('Se va a borrar un registro')
      $.ajax({
        type: 'DELETE',
        url: `http://${conect.host}/subjects/${idAsignaturas}`,
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
