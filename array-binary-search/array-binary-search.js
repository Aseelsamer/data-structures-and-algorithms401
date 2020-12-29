'use strict';

function BinarySearch(array, key) {

  let results;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      results = i;
      break;
    } else {
      results = -1;
    }
  }
  return results;
}
