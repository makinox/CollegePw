'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
let conect = require('./../signin/index')
const $main = $('#main-container')

page('/gen-academy', (ctx, next) => {
  title('Utopia | Genera nuevos cursos')
  $main.empty().append(template)
  $main.find('#gen-academy').on('submit', (ev) => {
    ev.preventDefault()
    let nombreCurso = $main.find('.nombreCurso').val()
    let periodo = $main.find('.periodo').val()
    let curso = $main.find('.curso').val()
    let codigoG = $main.find('.codigoG').val()
    console.log(nombreCurso)
    console.log(periodo)
    console.log(curso)
    console.log(codigoG)
    $.ajax({
      type: 'POST',
      url: `http://${conect.host}/subjects`,
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
