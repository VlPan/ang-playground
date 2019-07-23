import { MessageComponent } from './message/message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubeComponent } from './cube.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CubeComponent, MessageComponent],
  exports: [
    CubeComponent
  ],
  entryComponents: [
    CubeComponent
  ]
})
export class CubeModule { }
