import { Component, OnInit } from '@angular/core';

import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from './services/dashboard.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {

  /**
   * NgbDatepicker
   */
  currentDate: NgbDateStruct;

  dataDashboard: any

  constructor(private calendar: NgbCalendar, private _dashboardService: DashboardService, private _toastr: ToastrService,) {}

  ngOnInit(): void {
    this.currentDate = this.calendar.getToday();
    this._dashboardService.getDashboard().subscribe(res => {
      this.dataDashboard = res.data;
    })

  }
}



