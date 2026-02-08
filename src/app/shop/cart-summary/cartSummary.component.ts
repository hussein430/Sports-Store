import { Component } from '@angular/core';
import { Cart } from '../../model/cart.model';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'cart-summary',
  imports: [CurrencyPipe, MatIconModule, MatButtonModule, MatBadgeModule, RouterModule],
  templateUrl: './cartSummary.component.html',
  styleUrl: './cartSummary.component.scss',
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {}
}
