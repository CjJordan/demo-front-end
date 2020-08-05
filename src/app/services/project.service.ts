import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Project} from '../models/Project';
import { Task } from '../models/Task';



const API_URL = environment.apiUrl; 

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
	projectList: Project[] = [];


  constructor(private http:HttpClient) {
  		this.getProjects();
   }

   getProjects(): void {
   	this.http.get(API_URL + "/projects")
   		.subscribe((response:any) => {
   			this.projectList = response.map( e => (
            new Project(e.id, 
              e.projectName, 
              e.taskList.map(t => new Task(t.id, t.taskName, t.isComplete)),
              e.taskList.reduce((sum, t) => sum + t.isComplete, 0)
             )
         ));
   		});
   }

   toggleTaskStatus(task:Task): void{
   	  task.isComplete = !task.isComplete;
   	  this.http.put(API_URL + "/tasks/" + task.id, task)
   	  	.subscribe((response:any) => {this.getProjects()})
   }

   deleteTask(task:Task): void {
     this.http.delete(API_URL + "/tasks/" + task.id)
       .subscribe((response:any) => this.getProjects());
   }

   addTask(taskName: String, projectId: number) : void {
     const newTask = {
       taskName: taskName,
       projectId: projectId
     }

      this.http.post(API_URL + "/tasks", newTask)
        .subscribe(() => this.getProjects());
   }


}
