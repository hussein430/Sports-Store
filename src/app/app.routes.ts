import { Routes } from '@angular/router';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { CartDetailComponent } from './shop/cart-details/cartDetail.component';
import { ShopComponent } from './shop/shop.component';
import { storeFirstGuard } from './store-first-guard';

export const routes: Routes = [
  {
    path: 'store',
    canActivate: [storeFirstGuard],
    component: ShopComponent,
  },
  { path: 'cart', canActivate: [storeFirstGuard], component: CartDetailComponent },
  { path: 'checkout', canActivate: [storeFirstGuard], component: CheckoutComponent },
  {
    path: 'admin',
    children: [
      {
        path: 'auth',
        loadComponent: () => import('./admin/auth/auth.component').then((m) => m.AuthComponent),
      },
      {
        path: 'main',
        loadComponent: () => import('./admin/admin.component').then((m) => m.AdminComponent),
      },
      { path: '**', redirectTo: 'auth' },
    ],
  },
  { path: '**', redirectTo: '/store' },
];
