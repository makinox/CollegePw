const page = require('page')
const $ = require('jquery')
const template = require('./template')

page('/', (ctx, next) => {
    let $main = $('#main-container')
    $main.append(template)
})