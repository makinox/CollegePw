const page = require('page')
const $ = require('jquery')

page('/profile', (ctx,next) => {
    let $main = $('#main-container')
    $main.append('Prefiles UwU')
})