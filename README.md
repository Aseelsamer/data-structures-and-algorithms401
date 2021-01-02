# data-structures-and-algorithms401

# ReverseArray

## Challenge :
-The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.

## Approach & Efficiency
-For Loop
-O(n) length of the loop in the array 

## Solution

![GitHub Logo](/assests/reversearrayimg.PNG)


----------------------------------------------

# Shift array

# Challenge Summary
 return an array with the new value added at the middle index.

## Challenge Description
Write a function called insertShiftArray which takes in an array and the value to be added. 
## Approach & Efficiency
The approach I took for this challenge was first to get the index where I should be inserting the new value. I need to find what the middle point is of the given array, even if it has an even number of elements or odd.


This function has complexity of O(n) since insert it depends on the size of the array.

## Solution
![GitHub Logo](./assests/shift-array.PNG)

-----------------------------------------------------

# Singly Linked List
singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node (tail). 

## Challenge
-Node Class, Linked list Class (add methods) ,
check test :
Can successfully instantiate an empty linked list
Can properly insert into the linked list
The head property will properly point to the first node in the linked list
Can properly insert multiple nodes into the linked list
Will return true when finding a value within the linked list that exists
Will return false when searching for a value in the linked list that does not exist
Can properly return a collection of all the values that exist in the linked list

## Approach & Efficiency
Used classes , loop .
Big O -> Insert time O(1) 
-> Includes & toString O(n)

## API
-***insert(value)***
takes in any value
adds a new node with that value to the head of the list
-***includes(value)***
takes in any value and returns a boolean
returns true if value exists in the linked list
returns false if value does not exist in the linked list
-***toString()***
takes in no arguments
returns a string representing all the values in the linked list

# UML :
![GitHub Logo](./assests/linkedlist.jpg)



