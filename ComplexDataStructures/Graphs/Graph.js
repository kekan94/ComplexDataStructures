// How would you iterate through a directed graph? What about an undirected graph?
// How would you create a cycle with a directed graph?

const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
  constructor(isWeighted = false, isDirected = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
    this.isDirected = isDirected;
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter(v => v !== vertex);
  }

  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;

    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      if(vertexOne.edges.length) {
        const repeatedEdge = vertexOne.edges.find(edge => edge.end === vertexTwo);
        if (repeatedEdge) {
          console.log('You cannot repeat edges!\n');
        } else {
          vertexOne.addEdge(vertexTwo, edgeWeight);
          if (!this.isDirected) {
            vertexTwo.addEdge(vertexOne, edgeWeight);
          }
        }
      } else {
        vertexOne.addEdge(vertexTwo, edgeWeight);

        if (!this.isDirected) {
          vertexTwo.addEdge(vertexOne, edgeWeight);
        }
      }
    } else {
      throw new Error('Expected Vertex arguments.');
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);

      if (!this.isDirected) {
        vertexTwo.removeEdge(vertexOne);
      }
    } else {
      throw new Error('Expected Vertex arguments.');
    }
  }

  createCycleByHand(arrayOfVertices) /*improve this*/ {
    if (this.isDirected) {
      let output = '';
      for (let i = 0; i < arrayOfVertices.length; i++) {
        if (arrayOfVertices[i] instanceof Vertex) {
          output += arrayOfVertices[i].data + ' --> ';
        }
      }
      output += arrayOfVertices[0].data;
      console.log(output);
    } else {
      console.log('Cannot create a cycle with an undirected graph!');
    }
  }

  print() {
    this.vertices.forEach(vertex => vertex.print());
  }
}

module.exports = Graph;