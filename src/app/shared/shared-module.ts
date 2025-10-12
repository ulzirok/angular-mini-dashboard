import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from './components/post/post';
import { BurgerMenu } from './components/ui/burger-menu/burger-menu';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { ModalProfile } from './components/ui/modal/modal-profile';
import { ModalPost } from './components/ui/modal/modal-post';
import { DashboardRoutingModule } from '../features/dashboard/dashboard-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Post,
    BurgerMenu,
    ModalProfile,
    ModalPost
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
],
  exports: [
    Post,
    BurgerMenu,
    ModalProfile,
    ModalPost
  ]
})
export class SharedModule { }
