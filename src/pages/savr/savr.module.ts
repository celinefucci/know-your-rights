import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavrPage } from './savr';

@NgModule({
  declarations: [
    SavrPage,
  ],
  imports: [
    IonicPageModule.forChild(SavrPage),
  ],
})
export class SavrPageModule {}
