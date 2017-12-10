import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.route.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule ,
    ReactiveFormsModule, 
    HttpModule, 
    FormsModule, 
    HomeModule,
    AppRoutingModule
  ],
  providers: [
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
