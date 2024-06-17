import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

  projetForm!: FormGroup;
  submitted: boolean;

  detailProject: any;


  constructor(
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute,

  ) {

  }


  ngOnInit(): void {
    this._route.data.subscribe(({ project }) => {
      this.detailProject = project.data;
    })

    this.projetForm = this._formBuilder.group({
      nom: [],
      dureeProjet: [],
      description: []
    });
  };

  async update(idProjet: number) {
    this.submitted = true;
    if (this.projetForm.invalid) {
      this._toastr.info('Veuillez remplir correctement tous les champs !');
      return;
    }

    const value = await this.projetForm.value;

    await this._projectService.updateProject(value, idProjet).subscribe(res => {
      try {
        this._toastr.success("Projet mise à avec succes !");
        this._router.navigateByUrl("project");
      } catch (error) {
        this._toastr.error(`${error}`);
      }
    });

  };

}
