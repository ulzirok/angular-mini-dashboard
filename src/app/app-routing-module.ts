import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { authGuard } from './core/guards/auth-guard';
import { adminGuard } from './core/guards/admin-guard';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { NotFound } from './features/not-found/not-found';

const routes: Routes = [
  // Страницы авторизации (без авторизации)
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./features/auth/auth-module').then(m => m.AuthModule),
      },
      {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
      }
    ],
  },
  
  // Главная часть приложения (для авторизованных пользователей)
  {
    path: '',
    component: MainLayout,
    // canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard-module').then(m => m.DashboardModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./features/profile/profile-module').then(m => m.ProfileModule),
      },
      {
        path: 'admin',
        // canActivate: [adminGuard],
        loadChildren: () =>
          import('./features/admin//admin-module').then(m => m.AdminModule),
      },
    ],
  },

  // Страница 404
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
