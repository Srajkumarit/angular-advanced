import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input()
  projects: Project[] = [];
  constructor() { }

  ngOnInit() {
  }

}
