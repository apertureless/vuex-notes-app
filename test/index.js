// Polyfill fn.bind() for PhantomJS
Function.prototype.bind = require('function-bind')

// vuex promise polyfill for PhantomJS
require('es6-promise').polyfill()

var testsContext = require.context('.', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
