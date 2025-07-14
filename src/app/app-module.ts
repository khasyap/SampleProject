import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';
import { FormsModule } from '@angular/forms';
import { Login } from './login/login';
import { HttpClientModule } from '@angular/common/http';
import { Products } from './products/products';

@NgModule({
  declarations: [
    App,
    Home,
    About,
    Login,
    Products
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
