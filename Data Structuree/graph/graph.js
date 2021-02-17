'use strict';
const Queue = require('../stacksAndQueues/queue');

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertexA, vertexB, weight=null) {
    this.vertexA = vertexA;
    this.vertexB = vertexB;
    this.weight = weight;
  }
}

class Graph {

  constructor() {
    this.vertices = [];
    this.edges = [];
  }


  AddEdge(vertexA, vertexB,weight) {
    this.edges.push(weight);
    this.edges[vertexA.value].push(vertexB);
    this.edges[vertexB.value].push(vertexA);
  }

  GetNodes(){
    let array=[];
    return array.push[vertex,edge]
  }

  GetNeighbors(vertex,weight) {
    if (this.edges[vertex.value]) {
      return this.edges[vertex.value,weight];
    } 
  }


  Size() {
    return this.vertices.length;
  }

  addVertex(value) {
    const vertex = new Vertex(value);

    this.vertices.push(vertex);

    this.edges[value] = [];

    return vertex;
  }

  breadthFirst(start) {
    let array = [];
    let queue = new Queue();
    queue.enqueue(start);
    array.push(start);

    while (!queue.isEmpty()) {
      let front = queue.dequeue();

      this.edges[front.value].forEach(vertex => {
        if (!array.includes(vertex)) {
          array.push(vertex);
          queue.enqueue(vertex);
        }
      });

    }

    return array;

  }

  depthFirst(root) {
    let visited = [];
    let stack = new Stack();
    stack.push(root);
    visited.push(root);
    while (!stack.isEmpty()) {
      this.edges[stack.top.value].forEach(edge => {
        if (!visited.includes(edge.destination)) {
          visited.push(stack.pop());
          stack.push(edge.destination);
        } else {
          visited.push(edge.destination);
        }
      });
    }

    
    return visited;
  }

}

module.exports = { Graph, Vertex,Edge };