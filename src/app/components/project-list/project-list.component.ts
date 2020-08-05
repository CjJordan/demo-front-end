import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/Project';
import {Task} from '../../models/Task';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {

  constructor(public projService: ProjectService) {
 
   }

  ngOnInit(): void {
  }

  trackByFn(index, item){
  	return item.id;
  }

}
