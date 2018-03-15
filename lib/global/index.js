'use strict'

const $ = require('jquery')

let conect = {
  host: process.env.ip || '192.168.0.31:3001',
  id: 1,
  asignature: 0
}

let $container = $('#main-container')

let faded = () => {
  $('.overlay').fadeToggle(500)
  $('nav').toggleClass('visible').toggleClass('invisible')
  $container.toggleClass('gauss')
  $('.button i').toggleClass('btn-open').toggleClass('btn-close')
}

$.when($container.ready(() => {
  // Quitando las cargas
  $container.find('.sk-cube-grid').empty()
  $('.relleno').remove()

  // Mostrando las vistas
  $container.fadeIn('slow')

  // Barra de navegacion
  $('.button a').click(faded)
  $('.overlay a').click(faded)
}))

$.ajax({
  url: `http://${conect.host}/users/${conect.id}`,
  type: 'GET',
  success: async (data, textStatus, xhr) => {
    // console.log(data)
    await data.forEach(async (user) => {
      await $('#header-container').find('.name').empty().html(user.nombres)
    })
  }
})

module.exports = conect
