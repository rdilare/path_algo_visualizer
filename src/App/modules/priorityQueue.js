





export class QElement{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.heuristic = Infinity;
		this.parent = NaN;
	}
}


export class PriorityQueue{
	constructor(){
		this.items = [];
	}

	enqueue(item){
		var contain = false;
		var item = item;
		for(let i=0;i<this.items.length;++i){
			if(item.heuristic<this.items[i].heuristic){
				this.items.splice(i,0,item);
				contain=true;
				break;
			}
		}
		if(!contain){
			this.items.push(item);
		}
	}
	dequeue(){
		if(this.items.length==0){
			return -1;
		}
		let item = this.items[0];
		let indx = 0;
		for(let i=1; i<this.items.length;++i){
			if(this.items[i].heuristic<item.heuristic){
				item = this.items[i];
				indx = i;
			}
		}
		this.items.splice(indx,1);
		return item;
	}
	empty(){
		return this.items.length==0;
	}
}

export default PriorityQueue;