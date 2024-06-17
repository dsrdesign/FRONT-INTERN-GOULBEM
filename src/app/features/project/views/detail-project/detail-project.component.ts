import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IInternsManager } from 'src/app/features/intern/interfaces/intern.interface';
import { ProjectService } from '../../services/project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {

  interns!: IInternsManager[];
  detailProject: any;
  taskForm!: FormGroup;
  submitted: any;

  constructor(
    private _route: ActivatedRoute,
    private _projectService: ProjectService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this._route.data.subscribe(({ project }) => {
      this.detailProject = project.data;
    })

    this.taskForm = this._formBuilder.group({
      dureeTache: ['', Validators.required],
      idStagiaire: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.listOfInterns()

  }

  listOfInterns() {
    this._projectService.listOfInterns().subscribe(res => {
      this.interns = res.data;
    })
  }

  public async save(idProjet: number) {
    this.submitted = true;
    if (this.taskForm.invalid) {
      this._toastr.info('Veuillez remplir correctement tous les champs !');
      return;
    }

    const value = await this.taskForm.value

    await this._projectService.addTask(value, idProjet).subscribe(res => {
      try {
        this._toastr.success("Tache cree avec succes !");
        this.taskForm.reset()
      } catch (error) {
        this._toastr.error(`${error}`);
      }
    })
  }

}
