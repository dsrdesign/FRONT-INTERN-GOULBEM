import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDataDetailIntern, Itache } from 'src/app/features/intern/interfaces/intern.interface';

@Component({
  selector: 'app-profile-intern',
  templateUrl: './profile-intern.component.html',
  styleUrls: ['./profile-intern.component.scss']
})
export class ProfileInternComponent implements OnInit {
  public detailIntern!: IDataDetailIntern;
  public totalProject!: number

  constructor(
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.data.subscribe(({ intern }) => {
      this.detailIntern = intern.data;
    })
  };

  tasks(idProject: number): Itache[]{
    return this.detailIntern.stagiaire.taches.filter(tache => tache.idProjet == idProject)
  }


}
