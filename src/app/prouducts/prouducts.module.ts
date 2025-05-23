import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllprouductsComponent } from './component/allprouducts/allprouducts.component';
import { ProuductdetailsComponent } from './component/prouductdetails/prouductdetails.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientXsrfModule } from '@angular/common/http';
import { ProductComponent } from './component/product/product.component';
// import { AppRoutingModule } from  '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeProductComponent } from './homeProducts/home-product/home-product.component';



@NgModule({
  declarations: [
    AllprouductsComponent,
    ProuductdetailsComponent,
    ProductComponent,
    HomeProductComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ]
 ,exports: [
  ProductComponent
  ,AllprouductsComponent,
  HomeProductComponent

]
})
export class ProuductsModule { }
