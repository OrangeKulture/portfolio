import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { appRoutes } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {ContentService} from './services/content.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    NavbarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
