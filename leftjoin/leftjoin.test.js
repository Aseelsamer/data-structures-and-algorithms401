  
'use strict';

const leftJoin = require('../leftJoin/left-join.js');

describe('Left Join', () => {

  it('should return an array of arrays containing the object key at index 0, the value from the left object at index 1, and the value from the right object at index 2', () => {

    const obj1 = { accessible: 'reachable', service: 'assistance', productive: 'effective' };
    const obj2 = { accessible: 'restricted', service: 'hindrance', productive: 'lagging' };

    const result = leftJoin(obj1, obj2);
    expect(result).toEqual(
      [
        [ 'accessible', 'reachable', 'restricted' ],
        [ 'service', 'assistance', 'hindrance' ],
        [ 'productive', 'effective', 'lagging' ]
      ]
    );

  });

})