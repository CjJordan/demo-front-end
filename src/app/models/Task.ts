export class Task {
	id: number;
	taskName: String;
	isComplete: boolean; 

	constructor(id:number, taskName:String, isComplete:boolean){
		this.id = id;
		this.taskName = taskName; 
		this.isComplete = isComplete;
	}
}
