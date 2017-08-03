"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var shared_1 = require("./shared");
var shopping_list_component_1 = require("./shopping-list/shopping-list.component");
var product_model_1 = require("./shared/product.model");
//import { Firebase } from "./shared/firebase";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_module_1.AppRoutingModule,
            shared_1.SharedModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            shopping_list_component_1.ShoppingListComponent
        ],
        providers: [product_model_1.ProductModel],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0Msd0RBQXNEO0FBQ3RELDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsbUNBQXdDO0FBQ3hDLG1GQUFnRjtBQUNoRix3REFBc0Q7QUFDdEQsK0NBQStDO0FBa0IvQyxJQUFhLFNBQVM7SUFBdEI7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFNBQVM7SUFoQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQixxQ0FBZ0I7WUFDaEIscUJBQVk7U0FDYjtRQUNELFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osOEJBQWE7WUFDYixnQ0FBYztZQUNkLG9DQUFnQjtZQUNoQiwrQ0FBcUI7U0FDdEI7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FDMUIsQ0FBQztHQUNXLFNBQVMsQ0FFckI7QUFGWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkJztcbmltcG9ydCB7IFNob3BwaW5nTGlzdENvbXBvbmVudCB9IGZyb20gJy4vc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0TW9kZWwgfSBmcm9tIFwiLi9zaGFyZWQvcHJvZHVjdC5tb2RlbFwiO1xuLy9pbXBvcnQgeyBGaXJlYmFzZSB9IGZyb20gXCIuL3NoYXJlZC9maXJlYmFzZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIEFib3V0Q29tcG9uZW50LFxuICAgIENvbnRhY3RDb21wb25lbnQsXG4gICAgU2hvcHBpbmdMaXN0Q29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1Byb2R1Y3RNb2RlbF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuIl19