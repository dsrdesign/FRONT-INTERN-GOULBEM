import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InternService } from '../../services/intern.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.scss']
})
export class AddInternComponent implements OnInit {


  stagiaireForm!: FormGroup;
  submitted: any;
  stagiaires: any;
  responsables: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _stagiaireService: InternService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.stagiaireForm = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      statut: ['', Validators.required],
      matriculeStagiaire: ['', Validators.required],
      linkedin: ['', Validators.required],
      codeDepartement: ['', Validators.required],
      idResponsable: ['', Validators.required],
      debutStage: ['', Validators.required],
      finStage: [''],
    });

    this.listDesStagiaires();
    this.listDesResponables()
  }

  listDesStagiaires() {
    this._stagiaireService.listOfDepartments().subscribe(res => {
      this.stagiaires = res.data
    })
  }

  listDesResponables() {
    this._stagiaireService.listOfManagers().subscribe(res => {
      this.responsables = res.data
    })
  }

  async save() {
    this.submitted = true;
    if (this.stagiaireForm.invalid) {
      const value = await this.stagiaireForm.value;
      console.log("Ohhh : ", value);
      this._toastr.info('Veuillez remplir correctement tous les champs !');
      return;
    };

    const value = await this.stagiaireForm.value;

    await this._stagiaireService.addIntern(value).subscribe(res => {
      try {
        this._toastr.success("Stagiaire cree avec sucess !");
        this._router.navigateByUrl("intern");
      } catch (error) {
        this._toastr.error(`${error}`);
      }
    });

  }
}
