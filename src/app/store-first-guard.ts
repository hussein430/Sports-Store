import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ShopComponent } from './shop/shop.component';

let firstNavigation = true;

export const storeFirstGuard: CanActivateFn = (route) => {
  const router = inject(Router);

  if (firstNavigation) {
    firstNavigation = false;

    if (route.component !== ShopComponent) return router.parseUrl('/');
  }

  return true;
};
