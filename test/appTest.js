const assert = require('chai').assert;

// const sayHello = require('../index').sayHello;
// const addNumbers = require('../index').addNumbers;
const index = require('../index');

// Results
sayHelloResult = index.sayHello();
addNumbersResult = index.addNumbers(5,5);
describe('App', function(){
    it('app should return hello', function(){
        // let result = index.sayHello();
        assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function(){
        // let result = index.sayHello();
        assert.typeOf(sayHelloResult, 'string');
    });
    
    it('addNumbers should return greater than 5', function(){
        // let result = index.addNumbers(5,5);
        assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers should return type number', function(){
        // let result = index.addNumbers();
        assert.typeOf(addNumbersResult, 'number');
    });
});