const page = require('page')
const $ = require('jquery')
const template = require('./template')

page('/home', (ctx, next) => {
    let $main = $('#main-container')
    $main.append(template)
})