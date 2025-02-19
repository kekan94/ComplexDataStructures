const Graph = require('./Graph');
const Vertex = require('./Vertex');

function findJudge(n, trustArray) {
    let townJudge;
    let possibleTownJudges = [];

    for (let j = 0; j < trustArray.length; j++) {
        if (trustArray[j][0] !== trustArray[j][1]) {
            possibleTownJudges.push(trustArray[j][1]);
        }
    }
    /*const townConnections = new Graph(false, true);
    for (let i = 1; i <= n; i++) {
        townConnections.addVertex(i);
    }
    for (let j = 0; j < trustArray.length; j++) {
        if (townConnections.vertices.filter(vertex => vertex === trustArray.))
        if (trustArray[j][0] instanceof Vertex && trustArray[j][1] instanceof Vertex) {
            townConnections.addEdge(trustArray[j][0], trustArray[j][1]);
        }
    }
    townConnections.print();*/

    //townJudge ? townJudge : -1;
    return possibleTownJudges;
}

console.log(findJudge(4, [[1, 4], [2, 4], [3, 4], [1, 2], [1, 3], [2, 3]]));
