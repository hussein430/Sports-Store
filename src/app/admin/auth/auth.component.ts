import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  templateUrl: 'auth.component.html',
  styleUrl: 'auth.component.scss',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    RouterModule,
  ],
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMessage?: string;
  constructor(private router: Router) {}
  authenticate(form: NgForm) {
    if (form.valid) {
      // perform authentication
      this.router.navigateByUrl('/admin/main');
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
