var vows = require('vows'),
    url = require('../src/url'),
    assert = require('assert');
    

vows.describe('URL rewrite').addBatch({
    'Pasando una cadena sin coincidencia': {
        topic: function () { return url.rewrite('/a') },

        'Debe devolver la misma cadena': function (url) {
            assert.equal (url, '/a');
        },
    },
    'Pasando la cadena de la regla 1 con 1 caracter': {
        topic: function(){return url.rewrite('/article/1')},
        'Debe de devolver /article?id=c1': function(url){
            assert.equal (url, '/article?id=1');
        }
    },
    'Pasando la cadena de la regla 1 con n caracter': {
        topic: function(){return url.rewrite('/article/12231')},
        'Debe de devolver /article/abcdefg12231': function(url){
            assert.equal (url, '/article?id=12231');
        }
    },
    'Pasando la cadena de la regla 2 con $1 1 caracter y $2 sin caracteres': {
        topic: function(){return url.rewrite('/guide/a/2008/')},
        'Debe de devolver /guide/a/2009/': function(url){
            assert.equal (url, '/guide/a/2009/');
        }
    },
    'Pasando la cadena de la regla 2 con $1 1 caracter y $2 con caracteres numericos': {
        topic: function(){return url.rewrite('/guide/a/2008/123')},
        'Debe de devolver /guide/a/2009/123': function(url){
            assert.equal (url, '/guide/a/2009/123');
        }
    },
    'Pasando la cadena de la regla 2 con $1 1 caracter y $2 con caracteres NO numericos': {
        topic: function(){return url.rewrite('/guide/a/2008/asc123')},
        'Debe de devolver /guide/a/2009/asc123': function(url){
            assert.equal (url, '/guide/a/2009/asc123');
        }
    },
    'Pasando la cadena de la regla 3': {
        topic: function(){return url.rewrite('/company/usa/newyork')},
        'Debe de devolver /company?country=usa&city=newyork': function(url){
            assert.equal (url, '/company?country=usa&city=newyork');
        }
    },
    'Pasando la cadena de la regla 3 con $2 vacio': {
        topic: function(){return url.rewrite('/company/usa/')},
        'Debe de devolver /company?country=usa': function(url){
            assert.equal (url, '/company?country=usa');
        }
    }
    
}).export(module);