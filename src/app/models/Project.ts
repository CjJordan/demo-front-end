import {Task} from './Task'

export class Project {
	id: number; 
	projectName: String;
	taskList: Task[];
	completionCount: number; 

	constructor(id:number, projectName:String, taskList: Task[], completionCount: number){
		this.id = id;
		this.projectName = projectName;
		this.taskList = taskList;
		this.completionCount = completionCount;
	}

}