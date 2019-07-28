import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaybackFacilityPage } from './payback-facility.page';

const routes: Routes = [
  {
    path: '',
    component: PaybackFacilityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaybackFacilityPage]
})
export class PaybackFacilityPageModule {}
