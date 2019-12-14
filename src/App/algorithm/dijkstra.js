
class Node{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.parent = NaN;
  }
}



class PriorityQueue{
  constructor(){
    this.items = [];
  }

  enqueue(item){
    var contain = false;
    for(let i=0;i<this.items.length;++i){
      if(item.weight<this.items[i].weight){
        this.items.splice(i,0,item);
        contain=true;
        break;
      }
    }
    if(!contain){
      this.items.push(item);
    }
  }
  dequeue(weight){
    if(this.items.length===0){
      return -1;
    }
    let item = this.items[0];
    let indx = 0;
    for(let i=1; i<this.items.length;++i){
      if(weight[this.items[i].x][this.items[i].y]<weight[item.x][item.y]){
        item = this.items[i];
        indx = i;
      }
    }
    this.items.splice(indx,1);
    return item;
  }
  empty(){
    return this.items.length===0;
  }
}




export function dijkstra(map,start,goal){

  function dist(a,b){
    return Math.abs(a.x-b.x) + Math.abs(a.y-b.y)
  }
  var visited = Array(map.length).fill(0).map(()=>Array(map[0].length).fill(false));
  var weight = Array(map.length).fill(0).map(()=>Array(map[0].length).fill(Infinity));

  var action = [[1,0],
          [0,1],
          [-1,0],
          [0,-1]];

  var searched_nodes = [];
  var Path = [];

  var start = new Node(start[0],start[1])
  var goal = new Node(goal[0],goal[1])

  var pq = new PriorityQueue();
  weight[start.x][start.y] = 0;
  pq.enqueue(start);

  var current = start;

  var doBreak=false;

  while(pq.length!=0){
    current = pq.dequeue(weight);
    for(let ac of action){
      var neighbour = new Node(0,0);
      neighbour.x = current.x + ac[0];
      neighbour.y = current.y + ac[1];
      if(neighbour.x>=map.length || neighbour.x<0 || neighbour.y>=map[0].length || neighbour.y<0){
        continue;
      }
      if(map[neighbour.x][neighbour.y]==1){
        continue;
      }else{
        var w = weight[current.x][current.y] + dist(current,neighbour);
        if(!visited[neighbour.x][neighbour.y]){
          neighbour.parent = current;
          pq.enqueue(neighbour);
          visited[neighbour.x][neighbour.y]=true;
          
        }else{
          if(w<weight[neighbour.x][neighbour.y]){
              neighbour.parent = current;
              pq.enqueue(neighbour);
          }
        }
        if(dist(neighbour,start)!=0 && dist(neighbour,goal)!=0){
              searched_nodes.push([neighbour.x,neighbour.y]);
              }
      }

      if(dist(neighbour,goal)===0){
        goal = neighbour;
        current = neighbour;
        doBreak=true;
        break;
      }
    }
    if(doBreak){
      break;
    }
  }

  if (dist(current,goal)===0){
    var path_node = goal;
    while(dist(path_node,start)!=0){
      Path.push([path_node.x,path_node.y])
      path_node = path_node.parent;
    }
  }else{
    console.log('No Path');
    Path = [];
  }
  Path.shift()

  return ({
    'res1' : Path.reverse(),
    'res2': searched_nodes,
  });

}

export default dijkstra;