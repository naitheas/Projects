class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let node of this.nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  // stack search = pop/push methods
  depthFirstSearch(start) {
    const stack = [start];
    const result = [];
    const visited = new Set(start);
    // while there are still neighbors to visit
    while (stack.length) {
      let currentVertex = stack.pop();
      result.push(currentVertex.value);
      // visit neighbors and push onto stack
      currentVertex.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  recursiveDFS(start,visited=new Set([start])){
    let result = [];
    for(let neighbor of start.adjacent){
      if(!visited.has(neighbor)){
        visited.add(neighbor)
        result.push(neighbor.value);
        this.recursiveDFS(neighbor,visited);
      }
    }
    return result;
  }

  // this function returns an array of Node values using BFS
  // queue search = shift/unshift methods
  breadthFirstSearch(start) {
    const toVisitQueue = [start];
    const result = [];
    const visited = new Set(start);
 
    // While there is still remaining vertices in queue
    while (toVisitQueue.length) {
      let currentVertex = toVisitQueue.shift();
      result.push(currentVertex.value);
      // visit neighbors
      currentVertex.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          toVisitQueue.push(neighbor);
        }
      });
    }
    return result;
  }


}

module.exports = {Graph, Node}