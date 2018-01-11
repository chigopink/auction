import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { ProductComponent } from './product/product.component';
import { CatouselComponent } from './catousel/catousel.component';
import { SeminarListComponent } from './seminar-list/seminar-list.component';
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    StarsComponent,
    ProductComponent,
    CatouselComponent,
    SeminarListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
