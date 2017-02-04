import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { OVERLAY_PROVIDERS } from "@angular2-material/core";
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MaterialModule } from '@angular/material';
import { MdInputModule } from '@angular2-material/input';
import { MdMenuModule } from '@angular2-material/menu';
import {Autosize} from 'angular2-autosize/angular2-autosize';
@NgModule({
  declarations: [
    AppComponent,
    Autosize
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    OVERLAY_PROVIDERS,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
