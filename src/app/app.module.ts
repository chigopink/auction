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
import { HttpModule } from "@angular/http";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { BigdetailComponent } from './bigdetail/bigdetail.component';
import {HttpInterceptorService} from "./apiServices/httpServices";

const routeConfig: Routes =[
  {path:'',component:HomeComponent},
  {path:'product/:prodTitle',component:ProductDetailComponent},
  {path:'bigList',component:SeminarListComponent},
  {path:'editBigs/:id',component:BigdetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    StarsComponent,
    ProductComponent,
    CatouselComponent,
    SeminarListComponent,
    ProductDetailComponent,
    HomeComponent,
    BigdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [HttpInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
