import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InternService } from '../../services/intern.service';
import { IDataDetailIntern } from '../../interfaces/intern.interface';

@Component({
  selector: 'app-update-intern',
  templateUrl: './update-intern.component.html',
  styleUrls: ['./update-intern.component.scss']
})
export class UpdateInternComponent implements OnInit {

  
  stagiaireForm!: FormGroup;
  submitted: any;
  stagiaires: any;
  responsables: any;

  detailIntern: IDataDetailIntern

  constructor(
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _stagiaireService: InternService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.data.subscribe(({ intern }) => {
      this.detailIntern = intern.data;
    })

    this.stagiaireForm = this._formBuilder.group({
      nom: [],
      prenom: [],
      statut: [],
      matriculeStagiaire: [],
      linkedin: [],
      codeDepartement: [],
      idResponsable: [],
      debutStage: [],
      finStage: [],
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

    await this._stagiaireService.upadteIntern(value, this.detailIntern.stagiaire.idStagiaire).subscribe(res => {
      try {
        this._toastr.success("Stagiaire mise à jour avec sucess !");
        this._router.navigateByUrl("intern");
      } catch (error) {
        this._toastr.error(`${error}`);
      }
    });

  }

}
