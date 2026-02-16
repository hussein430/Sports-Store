import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderRepository } from '../../model/order.repository';
import { Order } from '../../model/order.model';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
@Component({
  templateUrl: 'checkout.component.html',
  styleUrl: 'checkout.component.scss',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    RouterModule,
  ],
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;
  constructor(
    public repository: OrderRepository,
    public order: Order,
  ) {}
  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
