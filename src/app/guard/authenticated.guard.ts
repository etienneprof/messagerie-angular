import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let user = sessionStorage.getItem("user");

  if (user) {
    return true;
  } else {
    router.navigate(["/connexion"]);
    return false;
  }
};
