'use strict';

const Graph = require('../graph/graph.js').Graph;

describe('Graph', () => {

  it('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    graph.addNode('hello');
    expect(graph.vertices).toEqual([{ value: 'hello' }]);
  });

  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    let vertexA = graph.addNode('hello');
    let vertexB = graph.addNode('there');
    graph.addEdge(vertexA, vertexB);
    expect(graph.edges[vertexA.value]).toEqual([{value: 'there'}]);
    expect(graph.edges[vertexB.value]).toEqual([{ value: 'hello' }]);
  });

  it('getNeighbors should return an empty array when a vertex has no neighbors', () => {
    const graph = new Graph();
    let vertexA = graph.addVertex('hello');
    let neighbors = graph.getNeighbors(vertexA);
    expect(neighbors).toEqual([]);
  });



  it('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();
    graph.addVertex('hello');
    graph.addVertex('there');

    let size = graph.getSize();

    expect(size).toEqual(2);
  });


});