import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TenPage } from './ten';

@NgModule({
  declarations: [
    TenPage,
  ],
  imports: [
    IonicPageModule.forChild(TenPage),
  ],
})
export class TenPageModule {}
