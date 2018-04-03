'use strict'

const page = require('page')

require('./worker')
require('./global')
require('./root')
require('./signin')
require('./signout')
require('./profile')
require('./admin')
require('./gen-academy')
require('./gen-users')
require('./ges-academy')
require('./ges-users')
require('./home')

page()
