'use strict';

const arrayShift= require('../array-shift/array-shift');

describe('to pass the solution and return the array reversed',()=>{
    it('the test passs will return reverse array',()=>{
        expect(arrayShift([2, 4, 6, 8],5).toEqual([2,4,5,6,8]))
    })
});

describe('to pass the solution and return the array reversed',()=>{
    it('the test passs will return reverse array',()=>{
        expect(arrayShift([4, 8, 15, 23, 42],16).toEqual([4,8,15,16,23,42]))
    })
});