import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any
  constructor() { }

  ngOnInit(): void {
    this.init()
  }

  init() {
    const user = localStorage.getItem("@USER")
    user ? this.user = JSON.parse(user) : {
      responsable: {
        codeDepartement: "INFO",
        createAt: "2024-04-21T09:28:59.598Z",
        idResponsable: 0,
        nom: "root",
        nomUtilisateur: "root",
        poste: "Informaticien",
        prenom: "root"
      }
    }
  }

}
