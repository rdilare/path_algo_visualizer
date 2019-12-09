
import {QElement,PriorityQueue} from "./priorityQueue"



export function Astar(map,start,goal){

  function dist(a,b){
  return Math.abs(a.x-b.x) + Math.abs(a.y-b.y)
  }
  var visited = Array(map.length).fill(0).map(()=>Array(map[0].length).fill(false));
  
  var action = [[1,0],
        [0,1],
        [-1,0],
        [0,-1]];

var f=0;
var g=dist(start,goal);
var h=f+g;
start.heuristic = h;


var pq = new PriorityQueue();
pq.enqueue(start);


var current = start;
var step = 0;
while(!pq.empty()){
  if(step>2000){break;}
  step=step+1;
  current = pq.dequeue();
  if(dist(current,goal)==0){
    // console.log("break",goal);
    goal = current;
    break;
  }
  for(let a of action){
    var neighbour = new QElement(0,0);
    neighbour.x = current.x+a[0];
    neighbour.y = current.y+a[1];
    if(neighbour.x>=map.length || neighbour.x<0 || neighbour.y>=map[0].length || neighbour.y<0){
      continue;
    }
    if(map[neighbour.x][neighbour.y]==1){
      continue;
    }else{
      f = current.heuristic + dist(current,neighbour);
      g = dist(neighbour,goal);
      h = f+g;
      if (h<neighbour.heuristic){
      // console.log(neighbour.x,neighbour.y,neighbour.heuristic,':', f,g,h);
        neighbour.heuristic = h;
        neighbour.parent = current;
        if(!visited[neighbour.x][neighbour.y]){
        pq.enqueue(neighbour);
        visited[neighbour.x][neighbour.y]=true;
        }
      }

    }

  }

}

var Path = [];

if (dist(current,goal)==0){
  let path_node = goal;
  while(dist(path_node,start)!=0){
    // console.log('('+path_node.x+','+path_node.y+')');
    Path.push([path_node.x,path_node.y])
    path_node = path_node.parent;
  }
}else{
  console.log('No Path');
  Path = [];
}
// Path.push([start.x, start.y])
Path.shift()
return Path;
}

export default Astar;