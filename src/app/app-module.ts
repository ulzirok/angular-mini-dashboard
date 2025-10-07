import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';
import { Button } from './shared/components/ui/button/button';
import { Modal } from './shared/components/ui/modal/modal';
import { MainLayout } from './layout/main-layout/main-layout';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { NotFound } from './features/not-found/not-found';
import { AuthModule } from './features/auth/auth-module';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    MainLayout,
    AuthLayout,
    NotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
