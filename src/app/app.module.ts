import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { AssetsComponent } from './components/assets/assets.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PipesComponent } from './components/pipes/pipes.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { AnimauxService } from './services/animaux.service';
import { ServicesComponent } from './components/services/services.component';
import { RoutingComponent } from './components/routing/routing.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AssetsComponent,
    DirectivesComponent,
    ProductListComponent,
    PipesComponent,
    ServicesComponent,
    RoutingComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ErrorComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ AnimauxService,{provide: LOCALE_ID, useValue: "fr-FR" } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
