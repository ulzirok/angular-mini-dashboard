import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing-module';
import { Profile } from './profile';
import { SharedModule } from '../../shared/shared-module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Profile],
  imports: [CommonModule, ProfileRoutingModule, SharedModule, RouterModule, FormsModule],
})
export class ProfileModule {}
