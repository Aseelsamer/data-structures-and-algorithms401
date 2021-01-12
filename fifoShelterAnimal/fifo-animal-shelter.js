'use strict';

class Node{
    constructor(value,next){
        this.value =value;
        this.next=next;
    }
}
class AnimalShelter{
    constructer(){
this.front = null ;
this.rear = null;
    }

    enqueue(animal){
if(!this.rear){
    let animal1 = new Node(animal,null);
    this.front= animal1;
    this.rear = animal1;
    return;
}

let animal1 = new Node(animal,null);
this.rear.next = animal1;
this.rear=animal1;
    }

    dequeue(pref){
if(!this.rear){
    throw new Error ('empty');
}

let animal1 = this.front;

//if only one animal in the queue and this animal in the input
if(!this.front.next && this.front.value === input){
    this.front = null;
    return animal1.value;
}

//if one animal and is not the input return null
if(!this.front.next && this.front.value !== input){
    return null;
}
//if more than one animal and the input matches the front 
if(this.front.next && this.front.value === pref){
    this.front= this.front.next;
    return animal1.value;
}
//if more than one animal and doesn't match the front with the input 
if(this.front.next && this.front.value !== pref){
    while (this.front.value!== pref){
        this.front = this.front.next;
    }
    return this.front.value;
}
//if not cat or dog return null 
if(input !== 'dog' && input !== 'cat'){
    return null;
}
    }
}
module.exports = AnimalShelter;