'use strict';

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

  addNode(node){
    return this.nodes.set(node,[])
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

}

module.exports = { Graph, Vertex,Edge };