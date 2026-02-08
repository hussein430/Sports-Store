import { Component, inject, Renderer2, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartSummaryComponent } from '../shop/cart-summary/cartSummary.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CartSummaryComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private renderer = inject(Renderer2);
  isDarkMode = signal(false);

  toggleDarkMode() {
    this.isDarkMode.update((value) => !value);
    if (this.isDarkMode()) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
