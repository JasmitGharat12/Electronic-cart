import { CanActivateFn, Router } from '@angular/router';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  const isUserLoggedIn = localStorage.getItem('user');
  if (isUserLoggedIn) {
    return true;
  } else {
    alert('login first');
    return false;
  }
};
