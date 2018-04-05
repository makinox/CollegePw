'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
let conect = require('./../signin/index')

page('/ges-academy', (ctx, next) => {
  const $main = $('#main-container')

  title('Utopia | Gestiona tus cursos')
  $.when($(document).ready(() => {
    $main.empty().append(template)

      // Asignando las carateristicas de los usuarios
  if (sessionStorage.getItem('rol')){
    let rolSesion = sessionStorage.getItem('rol')
    if (rolSesion === 'estudiante'){

      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.eUser').removeAttr('id')

    }else if (rolSesion === 'profesor'){

      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.pUser').removeAttr('id')

    }else if (rolSesion === 'administrador'){

      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.aUser').removeAttr('id')

    }else if (rolSesion === 'super'){

      $('#header-container').find('.menuGen').attr('id', 'wUser')
      $('body').find('.aUser').removeAttr('id')

    }
  } else {
    page.redirect('/signin')
  }
    
    // Cuando haga ingrese la id de la materia
    $main.find('#ges-academy').on('submit', (ev) => {
      ev.preventDefault()
      $main.find('#ges-academy').addClass('form-hide')
      $main.find('#dbStatus2').removeClass('form-hide2')
      let idAsignaturas = $main.find('.idAsignaturas').val().trim()

      // Pidiendo esa materia y relleando la tabla de los datos de la asignatura
      $.ajax({
        url: `http://${conect.host}/subjects/${idAsignaturas}`,
        type: 'GET',
        success: async (data, textStatus, xhr) => {
          await data.forEach(async (subject) => {
            await $main.find('.nombresb').empty().html(`Curso: <strong>${subject.nombreCurso}</strong>`)
            await $main.find('.apellidosb').empty().html(`Periodo academico: <strong>${subject.periodo}</strong>`)
            await $main.find('.contraseñab').empty().html(`Grado: <strong>${subject.curso}</strong>`)
            await $main.find('.emailb').empty().html(`Codigo de curso: <strong>${subject.codigoG}</strong>`)
          })
          console.log(data)
        },
        error: (jqXHR, text, error) => {
          console.log(error)
        }
      })

      let i = 0
      // Pidiendo los usuarios de los cursos
      $.ajax({
        url: `http://${conect.host}/stats/${idAsignaturas}`,
        type: 'GET',
        success: async (data, textStatus, xhr) => {
          await data.forEach(async (user) => {
            i++
            // $main.find('#EstData').append(`<p class="card-text"><strong>Estudiantes | Nota 1 | Nota 2 | Nota 3</strong>`)
            // $main.find('#EstData').append(`<p class="card-text"><strong>${i}.</strong> ${user.usuario}<strong> | </strong>${user.nota1}<strong> | </strong>${user.nota2}<strong> | </strong>${user.nota3}</p>`)
            await $main.find('#EstData').append(`
            <tr>
            <th scope="row">${i}</th>
            <td>${user.usuario}</td>
            <td>${user.nota1}</td>
            <td>${user.nota2}</td>
            <td>${user.nota3}</td>
          </tr>
            `)
          })
        }
      })

      // En caso que desee actualizar la materia
      $main.find('.modificarId').on('click', (ev) => {
        ev.preventDefault()
        $('#dbForm').toggleClass('form-hide')
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
            },
            error: (jqXHR, text, error) => {
              console.log(error)
            }
          })
        })
      })

      // En caso de que se desee modificar notas
      $main.find('.notasId').on('click', (ev) => {
        ev.preventDefault()
        $main.find('#dbStat').toggleClass('form-hide')
        $main.find('#dbStat').on('submit', (ev) => {
          ev.preventDefault()
          let usuario = $main.find('.userc').val().trim()
          let calificacionEstudiante = $main.find('.cec').val().trim()
          if (calificacionEstudiante === '') { calificacionEstudiante = 0 }

          let calificacionProfesores = $main.find('.cpc').val().trim()
          if (calificacionProfesores === '') { calificacionProfesores = 0 }

          let nota1 = $main.find('.nt1').val().trim()
          if (nota1 === '') { nota1 = 0 }

          let nota2 = $main.find('.nt2').val().trim()
          if (nota2 === '') { nota2 = 0 }

          let nota3 = $main.find('.nt3').val().trim()
          if (nota3 === '') { nota3 = 0 }

          console.log('el id ', idAsignaturas)
          console.log(usuario)
          console.log(calificacionEstudiante)
          console.log(calificacionProfesores)
          console.log(nota1)
          console.log(nota2)
          console.log(nota3)

          $.ajax({
            type: 'PUT',
            url: `http://${conect.host}/stats/${usuario}&${idAsignaturas}`,
            data: {
              usuario,
              calificacionEstudiante,
              calificacionProfesores,
              nota1,
              nota2,
              nota3
            },
            success: (data, textStatus, jqXHR) => {
              console.log(data)
            }
          })
        })
      })

      // En caso de que se desee borrar
      $main.find('.borrarId').on('click', (ev) => {
        ev.preventDefault()
        console.log('Se va a borrar un registro')
        confirm('Está seguro de borrar los datos?')
        $.ajax({
          type: 'DELETE',
          url: `http://${conect.host}/subjects/${idAsignaturas}`,
          success: (data, textStatus, jqXHR) => {
            console.log(data)
          },
          error: (jqXHR, text, error) => {
            console.log(error)
          }
        })
      })
    })
  }))


})
