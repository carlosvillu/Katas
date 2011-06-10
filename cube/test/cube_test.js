global.vows = require('vows'),
global.assert = require('assert'),
global.sys = require('sys');

global.cube = require('../src/cube');

// Suite for testing the cube.
var client_suite = vows.describe("Basic test for cube");
client_suite.addBatch({
    "A cube": {
      topic: cube,
      "should be a object": function(topic){
        assert.ok(typeof topic === 'object');
      }, 
      "should return false if sum n1 is prime":function(topic){
        assert.isFalse(cube.containPrimerNumber('23', '42', '53'));
      },
      "should return false if sum n2 is prime":function(topic){
        assert.isFalse(cube.containPrimerNumber('24', '41', '53'));
      },
      "should return false if sum n3 is prime":function(topic){
        assert.isFalse(cube.containPrimerNumber('24', '42', '52'));
      },
      "should return true if sum n1, n2, n3 is not prime":function(topic){
        assert.isTrue(cube.containPrimerNumber('24', '42', '53'));
      }
    }
}).export(module);

