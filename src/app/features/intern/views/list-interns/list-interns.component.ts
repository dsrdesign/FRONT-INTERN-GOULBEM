import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
import { InternService } from '../../services/intern.service';
import { IInternsManager } from '../../interfaces/intern.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-interns',
  templateUrl: './list-interns.component.html',
  styleUrls: ['./list-interns.component.scss']
})
export class ListInternsComponent implements OnInit {

  public interByResponsables: IInternsManager[];

  myData = {
    "headings": [
      "Name",
      "Company",
      "Ext.",
      "Start Date",
      "Email",
      "Phone No."
    ],
    "data": [
      
        "Hedwig F. Nguyen",
        "Arcu Vel Foundation",
        "9875",
        "03/27/2017",
        "nunc.ullamcorper@metusvitae.com",
        "070 8206 9605"
      
    ]
  };

  constructor(private _internService: InternService, private _toastr: ToastrService,) {
    const myTable = document.getElementById("myTable");
    if (myTable) {
      const dataTable = new DataTable(myTable, {
        data: this.myData
      });
    }
   }

  ngOnInit(): void {
    this.listOfInternsByManager();
  };

  init() {
    this.listOfInternsByManager();
  };

  listOfInternsByManager() {
    this._internService.listOfInternsByManager().subscribe(res => {
      this.interByResponsables = res.data;
    });
  };


}
