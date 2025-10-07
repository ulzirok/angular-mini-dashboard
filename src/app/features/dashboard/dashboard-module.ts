import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard';
import { CreatePost } from './create-post/create-post';
import { PostList } from './post-list/post-list';
import { SharedModule } from '../../shared/shared-module';



@NgModule({
  declarations: [
    Dashboard,
    CreatePost,
    PostList
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
