const page = require('page')
const $ = require('jquery')

let $main = $('#main-container')

page('/', (ctx, next) => {
    $main.append('Hola buenos dias')
})

page('/home', (ctx, next)=> {
    $main.append('Hola buenas tardes')
})

page();
