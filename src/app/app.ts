import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ShopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
