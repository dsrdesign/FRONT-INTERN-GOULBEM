import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
import { ProjectService } from '../../services/project.service';
import { IProject } from 'src/app/features/intern/interfaces/intern.interface';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit, AfterViewInit {
  
  public allProjects!: IProject[];

  constructor(private _projectService: ProjectService) { }

  ngOnInit(): void {
    
    // Get data of the list of all projects
    this._projectService.listOfProjects().subscribe(res => {
      this.allProjects = res.data;
    });
  }

  ngAfterViewInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }


}
