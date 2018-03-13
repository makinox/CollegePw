'use strict'

const page = require('page')
const $ = require('jquery')
const template = require('./template')
const title = require('./../global/title')
const conect = require('../global/index')

page('/profile', (ctx, next) => {
  title('Utopia | Tu perfil')
  $('#main-container').empty().append(template)

  $.ajax({
    url: `http://${conect.host}/users/${conect.id}`,
    type: 'GET',
    success: async (data, textStatus, xhr) => {
      // console.log(data)
      await data.forEach(async (user) => {
        await $('#main-container').find('.apellidos').empty().html(`${user.nombres} ${user.apellidos}`)
      })
    }
  })
})
