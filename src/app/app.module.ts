import { CheckboxComponent } from './../components/checkbox/checkbox.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CubeModule } from 'modules/cube/cube.module';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CubeModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
