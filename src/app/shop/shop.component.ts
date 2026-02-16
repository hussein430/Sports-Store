import { Component, computed, inject, signal, Signal } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CounterDirective } from './counter.directive';
import { Cart } from '../model/cart.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  imports: [
    MatIconModule,
    MatListModule,
    CurrencyPipe,
    MatButtonModule,
    MatSelectModule,
    CounterDirective,
    RouterModule,
  ],
  templateUrl: 'shop.component.html',
  styleUrl: 'shop.component.scss',
})
export class ShopComponent {
  private repository = inject(ProductRepository);
  private cart = inject(Cart);
  private router = inject(Router);
  products: Signal<Product[]>;
  categories: Signal<string[]>;
  selectedCategory = signal<string>('All');
  productsPerPage = signal(3);
  selectedPage = signal(1);
  pagedProducts: Signal<Product[]>;
  // pageNumbers: Signal<number[]>;
  pageCount: Signal<number>;

  constructor() {
    this.products = computed(() => {
      if (this.selectedCategory() === 'All') {
        return this.repository.products();
      } else {
        return this.repository.products().filter((p) => p.category === this.selectedCategory());
      }
    });

    this.categories = this.repository.categories;
    let pageIndex = computed(() => {
      return (this.selectedPage() - 1) * this.productsPerPage();
    });

    this.pagedProducts = computed(() => {
      return this.products().slice(pageIndex(), pageIndex() + this.productsPerPage());
    });

    // this.pageNumbers = computed(() => {
    //   return Array(Math.ceil(this.products().length / this.productsPerPage()))
    //     .fill(0)
    //     .map((x, i) => i + 1);
    // });
    this.pageCount = computed(() => {
      return Math.ceil(this.products().length / this.productsPerPage());
    });
  }

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }

  changePage(newPage: number) {
    this.selectedPage.set(newPage);
  }

  changePageSize(newSize: number) {
    this.productsPerPage.set(Number(newSize));
    this.changePage(1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    // this.router.navigateByUrl('/cart');
  }
}
