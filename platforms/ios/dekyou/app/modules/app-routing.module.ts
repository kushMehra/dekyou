import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'scan', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'shoppinglist', component: ShoppingListComponent }
    ])
  ],
  exports: [ NativeScriptRouterModule ]
})
export class AppRoutingModule {

}
