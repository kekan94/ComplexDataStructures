const Graph = require('./Graph');

const preOrderDepthFirstTraversal = (start, visitedVertices = [start]) => {
    console.log(start.data);
  
    start.edges.forEach((edge) => {
      const neighbor = edge.end;
  
      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        preOrderDepthFirstTraversal(neighbor, visitedVertices);
      }
    });
};

const postOrderDepthFirstTraversal = (start, visitedVertices = [start]) => {
    start.edges.forEach((edge) => {
        const neighbor = edge.end;
        
        if (!visitedVertices.includes(neighbor)) {
            visitedVertices.push(neighbor);
            postOrderDepthFirstTraversal(neighbor, visitedVertices);
        }
    });
    
    console.log(visitedVertices.pop());
};

const simpleGraph = new Graph(true, false);
const startNode = simpleGraph.addVertex('v0.0.0');
const v1 = simpleGraph.addVertex('v1.0.0');
const v2 = simpleGraph.addVertex('v2.0.0');

const v11 = simpleGraph.addVertex('v1.1.0');
const v12 = simpleGraph.addVertex('v1.2.0');
const v21 = simpleGraph.addVertex('v2.1.0');

const v111 = simpleGraph.addVertex('v1.1.1');
const v112 = simpleGraph.addVertex('v1.1.2');
const v121 = simpleGraph.addVertex('v1.2.1');
const v211 = simpleGraph.addVertex('v2.1.1');

simpleGraph.addEdge(startNode, v1);
simpleGraph.addEdge(startNode, v2);

simpleGraph.addEdge(v1, v11);
simpleGraph.addEdge(v1, v12);
simpleGraph.addEdge(v2, v21);

simpleGraph.addEdge(v11, v111);
simpleGraph.addEdge(v11, v112);
simpleGraph.addEdge(v12, v121);
simpleGraph.addEdge(v21, v211);

console.log('Pre order\n');
preOrderDepthFirstTraversal(simpleGraph.vertices[0]);

console.log('\nPost order\n');
postOrderDepthFirstTraversal(simpleGraph.vertices[0]);
