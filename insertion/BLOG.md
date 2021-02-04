# Merge Sort

Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part

-----------------------------------------------------------

# Big O 
Time Complexity: O(n*2)

Space: O(1)

-------------------------------------------------

# JS Code :

`'use strict';

const insertionSort = arr => {

  for (let i = 1; i < arr.length; i++) {
    let j = (i - 1);
    let temp = arr[i];

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;

  }

  return arr;

};

module.exports = insertionSort;`

-------------------------------------------------

# Solution :

![GitHub Logo](./assests/insertion.jpg)