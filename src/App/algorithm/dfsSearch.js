
class Node{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.parent = NaN;
	}
}

export function dfs(map,start,goal){

	function dist(a,b){
	  return Math.abs(a.x-b.x) + Math.abs(a.y-b.y)
	}
	var visited = Array(map.length).fill(0).map(()=>Array(map[0].length).fill(false));

	var action = [[1,0],
			    [0,1],
			    [-1,0],
			    [0,-1]];

	var searched_node = [];
	var Path = [];

	var start = new Node(start[0],start[1])
	var goal = new Node(goal[0],goal[1])

	var pq = [];
	pq.push(start);

	var current = start;

	var doBreak=false;

	while(pq.length!=0){
		current = pq.pop();
		for(let ac of action){
			var neighbour = new Node(0,0);
			neighbour.x = current.x + ac[0];
			neighbour.y = current.y + ac[1];
			if(neighbour.x>=map.length || neighbour.x<0 || neighbour.y>=map[0].length || neighbour.y<0){
				continue;
			}
			if(map[neighbour.x][neighbour.y]===1){
				continue;
			}else{
				if(!visited[neighbour.x][neighbour.y]){
					neighbour.parent = current;
					pq.push(neighbour);
					visited[neighbour.x][neighbour.y]=true;
					if(dist(neighbour,start)!=0 && dist(neighbour,goal)!=0){
        			searched_node.push([neighbour.x,neighbour.y]);
        			}
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
		'res2': searched_node,
	});

}

export default dfs;