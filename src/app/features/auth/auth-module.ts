import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './login/login';
import { Register } from './register/register';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Login, Register],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, RouterModule],
  exports: [Login],
})
export class AuthModule {}
