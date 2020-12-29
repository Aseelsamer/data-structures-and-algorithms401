'use strict';

const arraySearch = require('../array-binary-search/array-binary-search');

describe('array search',()=>{
    it('the test passes it will return the number of index',()=>{
        expect(arraySearch([4,8,15,16,23,42], 15).toEqual(2))
    })
});

describe('array search',()=>{
    it('the test passes it will return the number of index',()=>{
        expect(arraySearch([11,22,33,44,55,66,77], 90).toEqual(-1))
    })
});