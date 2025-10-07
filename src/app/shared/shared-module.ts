import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from './components/post/post';
import { BurgerMenu } from './components/ui/burger-menu/burger-menu';
import { AppRoutingModule } from '../app-routing-module';
import { RouterModule } from '@angular/router';
import { Modal } from './components/ui/modal/modal';



@NgModule({
  declarations: [
    Post,
    BurgerMenu,
    Modal
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Post,
    BurgerMenu,
    Modal
  ]
})
export class SharedModule { }
