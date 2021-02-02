# Quick Sort

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array.

-----------------------------------------------------------

# Big O 
-Time O(n^2)
-Space O(n)

-----------------------------------------------------------

# JS Code :

`'use strict';


const quickSort = (arr) => {

    if (arr.length <= 1) {
      return arr;
    }
  

    const pivot = arr[arr.length - 1];
  
  
    const leftArr = [];
    const rightArr = [];
  
  
    for(let i = 0; i < arr.length - 1; i++) {
    
      if (arr[i] <= pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };
  
  module.exports = quickSort;`

---------------------------------------------------------------------
# Solution :

![GitHub Logo](./assests/quick.jpg)