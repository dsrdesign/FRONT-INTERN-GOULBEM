import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDataDetailIntern, IIntern, Itache } from '../../interfaces/intern.interface';
import { InternService } from '../../services/intern.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-intern',
  templateUrl: './detail-intern.component.html',
  styleUrls: ['./detail-intern.component.scss']
})
export class DetailInternComponent implements OnInit {

  public detailIntern!: IDataDetailIntern;
  public totalProject!: number

  taskForm!: FormGroup;
  submitted: any;

  task: Itache

  setTask(task: Itache){
    this.task = task
  }

  tasks(idProject: number): Itache[]{
    return this.detailIntern.stagiaire.taches.filter(tache => tache.idProjet == idProject)
  }

  constructor(
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _internService: InternService,
    private modalService: NgbModal,
    private _router : Router,
    private _formBuilder: FormBuilder,


  ) { }

  ngOnInit(): void {
    this._route.data.subscribe(({ intern }) => {
      this.detailIntern = intern.data;
    })

    this.taskForm = this._formBuilder.group({
      dureeTache: [],
      description: [],
    });

  };

  // Archived Task
  public archivedIntern(idStagiaire: number){
    this._internService.archivedIntern(idStagiaire).subscribe(res => {
      try {
        this.detailIntern.stagiaire.statut = res.data.statut
        this._toastr.success(`Stagiaire ${res.data.statut}`);
      } catch (error) {
        this._toastr.error(`${error}`);
      }
    })
  }
// Open modal Task
  openVerticalCenteredModal(content: TemplateRef<any>, task: Itache) {
    this.setTask(task)
    this.modalService.open(content, {centered: true}).result.then((result) => {
      console.log("Modal closed" + result);
    }).catch((res) => {});
  }

  // Update Task
  public async updateTask() {
    this.submitted = true;
    if (this.taskForm.invalid) {
      this._toastr.info('Veuillez remplir correctement tous les champs !');
      return;
    }
    const value = await this.taskForm.value
    await this._internService.updateTask(value, this.task.idTache).subscribe(res => {
      try {
        window.location.reload()
        this._toastr.success("Tache cree avec succes !");
        this.taskForm.reset()
      } catch (error) {
        this._toastr.error(`${error}`);
      }
    })
  }

  // Delete Task
  public deleteTask(){
    this._internService.deleteTask(this.task.idTache).subscribe(res => {
      try {
        this._toastr.success(`Tache supprimé avec succès !`);
        this._router.navigateByUrl("intern");
      } catch (error) {
        this._toastr.error(`${error}`);
      }
    })
  }

}
