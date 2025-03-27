import { Routes} from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./pages/home/home.component')},
    {path: 'login', loadComponent: () => import('./pages//login/login.component')},
    {
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup.component'),
      },
    
    {
        path: 'confirmation',
        loadComponent: () => import('./pages/confirmation/confirmation.component'),
      },
    {
      path: 'my-ideas',
      loadComponent: () => import('./pages/my-ideas/my-ideas.component')
    }
    
];
