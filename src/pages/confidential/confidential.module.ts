import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfidentialPage } from './confidential';

@NgModule({
  declarations: [
    ConfidentialPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfidentialPage),
  ],
})
export class ConfidentialPageModule {}
