import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  submitted = false

  constructor(
    // private _notifier : NotificationService,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    // private _toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      motDePasse: ['', Validators.required],
      nomUtilisateur: ['', Validators.required],
    })
  }

  async login() {
    this.submitted = true
    if (this.loginForm.invalid) {
      // this.submitted = false
      return;
    }

    const form = this.loginForm.value;
    this._authService.login(form.nomUtilisateur, form.motDePasse).subscribe(res => {
      this.submitted = false      
    })
  }








  onLoggedin(e: Event) {
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('isLoggedin')) {
      // this._router.navigate([this.returnUrl]);
    }
  }

}
