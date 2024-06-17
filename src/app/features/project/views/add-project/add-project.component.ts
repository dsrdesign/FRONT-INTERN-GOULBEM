import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  projetForm!: FormGroup;
  submitted: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _projectService: ProjectService,
    private _router: Router,
  ) {

  }


  ngOnInit(): void {
    this.projetForm = this._formBuilder.group({
      nom: ['', Validators.required],
      dureeProjet: ['', Validators.required],
      description: ['', Validators.required]
    });
  };

  async save() {
    this.submitted = true;
    if (this.projetForm.invalid) {
      this._toastr.info('Veuillez remplir correctement tous les champs !');
      return;
    }

    const value = await this.projetForm.value;

    await this._projectService.addProject(value).subscribe(res => {
      try {
        this._toastr.success("Projet cree avec succes !");
        this._router.navigateByUrl("project");
      } catch (error) {
        this._toastr.error(`${error}`);
      }
    });

  };

 
}
