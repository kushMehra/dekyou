import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductModel } from "./shared/product.model";
//import { Firebase } from "./shared/firebase";

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ShoppingListComponent
  ],
  providers: [ProductModel],
  bootstrap: [AppComponent]
})
export class AppModule {

}
