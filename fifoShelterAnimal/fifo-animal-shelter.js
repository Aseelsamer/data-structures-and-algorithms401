'use strict';
const Queue = require('../Data Structuree/stacksAndQueues/queue')


class AnimalShelter{
    constructer(){
        this.dog=new Queue();
        this.cat=new Queue();
    }

    enqueue(animal){
if(animal.type ==='cat'){

    this.cat.enqueue(animal);
}else if(animal.type === 'dog'){
    this.dog.enqueue(animal);
}
}
    dequeue(pref){
if(pref=== 'cat'){
    return this.cat.dequeue();
}else if(pref === 'dog'){
    return this.dog.dequeue();
}else{return null;}
}
}

module.exports = AnimalShelter;