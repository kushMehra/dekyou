"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var shopping_list_component_1 = require("./shopping-list/shopping-list.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'scan', component: contact_component_1.ContactComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'contact', component: contact_component_1.ContactComponent },
                { path: 'shoppinglist', component: shopping_list_component_1.ShoppingListComponent }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCxtRkFBZ0Y7QUFjaEYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLGdCQUFnQjtJQVo1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUM7Z0JBQy9CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtnQkFDdEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtnQkFDN0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO2dCQUM1QyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO2dCQUNoRCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO2FBQzNELENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFFLGlDQUF3QixDQUFFO0tBQ3RDLENBQUM7R0FDVyxnQkFBZ0IsQ0FFNUI7QUFGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaG9wcGluZ0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdzY2FuJywgY29tcG9uZW50OiBDb250YWN0Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdhYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2NvbnRhY3QnLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3Nob3BwaW5nbGlzdCcsIGNvbXBvbmVudDogU2hvcHBpbmdMaXN0Q29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xuXG59XG4iXX0=