"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var action_bar_1 = require("ui/action-bar");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var SideDrawerPageComponent = (function () {
    function SideDrawerPageComponent(routerExtensions, activatedRoute, page, ngZone) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.page = page;
        this.ngZone = ngZone;
        /**
         * On tap of any side-drawer item, hiding content if this flag is true.
         */
        this.isContentVisible = true;
        /**
         * Navigation Menu Items
         */
        this.navMenu = [
            { name: 'Home', commands: ['/'] },
            { name: 'Scan', commands: ['/scan'] },
            { name: 'About', commands: ['/about'] },
            { name: 'Shopping List', commands: ['/shoppinglist'] }
        ];
        this.setActionBarIcon(this.page);
        this.setDrawerTransition();
    }
    SideDrawerPageComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    SideDrawerPageComponent.prototype.ngOnDestroy = function () {
        this.drawer.off('drawerClosed');
    };
    SideDrawerPageComponent.prototype.toggleSideDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    /**
     * Navigates to next page after drawer is closed.
     */
    SideDrawerPageComponent.prototype.navigateTo = function (routeCommands) {
        var _this = this;
        //console.log(routeCommands);
        this.drawer.closeDrawer();
        var currentUrl = this.routerExtensions.router.routerState.snapshot.url;
        var newUrlTree = this.routerExtensions.router.createUrlTree(routeCommands);
        var newUrl = this.routerExtensions.router.serializeUrl(newUrlTree);
        if (currentUrl !== newUrl) {
            this.isContentVisible = false;
            this.drawer.on('drawerClosed', function () {
                _this.ngZone.run(function () {
                    console.log("1111");
                    _this.routerExtensions.navigate(routeCommands, {
                        clearHistory: true,
                        animated: false
                    });
                    _this.isContentVisible = false;
                    _this.drawer.off('drawerClosed');
                });
            });
        }
    };
    SideDrawerPageComponent.prototype.setDrawerTransition = function () {
        if (platform_1.isAndroid) {
            this.drawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        }
        if (platform_1.isIOS) {
            this.drawerTransition = new sidedrawer_1.PushTransition();
        }
    };
    SideDrawerPageComponent.prototype.setActionBarIcon = function (page) {
        if (platform_1.isAndroid) {
            page.actionBar.navigationButton = this.getNavigationButton();
        }
        if (platform_1.isIOS) {
            page.actionBar.actionItems.addItem(this.getNavigationButton());
        }
    };
    SideDrawerPageComponent.prototype.getNavigationButton = function () {
        var navActionItem = new action_bar_1.ActionItem();
        navActionItem.icon = 'res://ic_menu_black';
        if (navActionItem.ios) {
            navActionItem.ios.position = 'left';
        }
        navActionItem.on('tap', this.toggleDrawer.bind(this));
        return navActionItem;
    };
    SideDrawerPageComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return SideDrawerPageComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], SideDrawerPageComponent.prototype, "drawerComponent", void 0);
SideDrawerPageComponent = __decorate([
    core_1.Component({
        selector: 'side-drawer-page',
        templateUrl: 'modules/shared/side-drawer-page/side-drawer-page.component.html',
        styleUrls: ['modules/shared/side-drawer-page/side-drawer-page.component.css']
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        router_1.ActivatedRoute,
        page_1.Page,
        core_1.NgZone])
], SideDrawerPageComponent);
exports.SideDrawerPageComponent = SideDrawerPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUV1QjtBQUN2QiwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELGdDQUErQjtBQUMvQixxQ0FBNEM7QUFDNUMsNENBQTJDO0FBQzNDLHNFQUVvRDtBQUNwRCxpRUFFNEM7QUFPNUMsSUFBYSx1QkFBdUI7SUF5QmxDLGlDQUNVLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixJQUFVLEVBQ1YsTUFBYztRQUhkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBMUJ4Qjs7V0FFRztRQUNILHFCQUFnQixHQUFZLElBQUksQ0FBQztRQU9qQzs7V0FFRztRQUNILFlBQU8sR0FBVTtZQUNmLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTtTQUN2RCxDQUFDO1FBVUEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsaURBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxV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TSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRU8sOENBQVksR0FBcEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQTNHRCxJQTJHQztBQTFHb0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBa0IsZ0NBQXNCO2dFQUFDO0FBRGhFLHVCQUF1QjtJQUxuQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsaUVBQWlFO1FBQzlFLFNBQVMsRUFBRSxDQUFDLGdFQUFnRSxDQUFDO0tBQzlFLENBQUM7cUNBMkI0Qix5QkFBZ0I7UUFDbEIsdUJBQWM7UUFDeEIsV0FBSTtRQUNGLGFBQU07R0E3QmIsdUJBQXVCLENBMkduQztBQTNHWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tICd1aS9hY3Rpb24tYmFyJztcbmltcG9ydCB7XG4gIFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlXG59IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQge1xuICBQdXNoVHJhbnNpdGlvbiwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvblxufSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZS1kcmF3ZXItcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9zaGFyZWQvc2lkZS1kcmF3ZXItcGFnZS9zaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21vZHVsZXMvc2hhcmVkL3NpZGUtZHJhd2VyLXBhZ2Uvc2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZURyYXdlclBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAvKipcbiAgICogT24gdGFwIG9mIGFueSBzaWRlLWRyYXdlciBpdGVtLCBoaWRpbmcgY29udGVudCBpZiB0aGlzIGZsYWcgaXMgdHJ1ZS5cbiAgICovXG4gIGlzQ29udGVudFZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBGb3IgYW5kcm9pZCB1c2luZyBTbGlkZU9uVG9wIHRyYW5zaXRpb24gYW5kIGZvciBpT1MsIHB1c2ggdHJhbnNpdGlvbi5cbiAgICovXG4gIGRyYXdlclRyYW5zaXRpb246IGFueTtcblxuICAvKipcbiAgICogTmF2aWdhdGlvbiBNZW51IEl0ZW1zXG4gICAqL1xuICBuYXZNZW51OiBhbnlbXSA9IFtcbiAgICB7IG5hbWU6ICdIb21lJywgY29tbWFuZHM6IFsnLyddIH0sXG4gICAgeyBuYW1lOiAnU2NhbicsIGNvbW1hbmRzOiBbJy9zY2FuJ10gfSxcbiAgICB7IG5hbWU6ICdBYm91dCcsIGNvbW1hbmRzOiBbJy9hYm91dCddIH0sXG4gICAgeyBuYW1lOiAnU2hvcHBpbmcgTGlzdCcsIGNvbW1hbmRzOiBbJy9zaG9wcGluZ2xpc3QnXSB9XG4gIF07XG5cbiAgcHJpdmF0ZSBkcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLnNldEFjdGlvbkJhckljb24odGhpcy5wYWdlKTtcbiAgICB0aGlzLnNldERyYXdlclRyYW5zaXRpb24oKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYXdlci5vZmYoJ2RyYXdlckNsb3NlZCcpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZURyYXdlcigpIHtcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byBuZXh0IHBhZ2UgYWZ0ZXIgZHJhd2VyIGlzIGNsb3NlZC5cbiAgICovXG4gIG5hdmlnYXRlVG8ocm91dGVDb21tYW5kczogYW55W10pIHtcbiAgICAvL2NvbnNvbGUubG9nKHJvdXRlQ29tbWFuZHMpO1xuICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgbGV0IGN1cnJlbnRVcmwgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnVybDtcbiAgICBsZXQgbmV3VXJsVHJlZSA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIuY3JlYXRlVXJsVHJlZShyb3V0ZUNvbW1hbmRzKTtcbiAgICBsZXQgbmV3VXJsID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5zZXJpYWxpemVVcmwobmV3VXJsVHJlZSk7XG4gICAgaWYgKGN1cnJlbnRVcmwgIT09IG5ld1VybCkge1xuICAgICAgdGhpcy5pc0NvbnRlbnRWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZHJhd2VyLm9uKCdkcmF3ZXJDbG9zZWQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCIxMTExXCIpO1xuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShyb3V0ZUNvbW1hbmRzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5pc0NvbnRlbnRWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kcmF3ZXIub2ZmKCdkcmF3ZXJDbG9zZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldERyYXdlclRyYW5zaXRpb24oKSB7XG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgdGhpcy5kcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIHRoaXMuZHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBQdXNoVHJhbnNpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0QWN0aW9uQmFySWNvbihwYWdlOiBQYWdlKSB7XG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgcGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbiA9IHRoaXMuZ2V0TmF2aWdhdGlvbkJ1dHRvbigpO1xuICAgIH1cblxuICAgIGlmIChpc0lPUykge1xuICAgICAgcGFnZS5hY3Rpb25CYXIuYWN0aW9uSXRlbXMuYWRkSXRlbSh0aGlzLmdldE5hdmlnYXRpb25CdXR0b24oKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROYXZpZ2F0aW9uQnV0dG9uKCkge1xuICAgIGxldCBuYXZBY3Rpb25JdGVtID0gbmV3IEFjdGlvbkl0ZW0oKTtcbiAgICBuYXZBY3Rpb25JdGVtLmljb24gPSAncmVzOi8vaWNfbWVudV9ibGFjayc7XG4gICAgaWYgKG5hdkFjdGlvbkl0ZW0uaW9zKSB7XG4gICAgICBuYXZBY3Rpb25JdGVtLmlvcy5wb3NpdGlvbiA9ICdsZWZ0JztcbiAgICB9XG4gICAgbmF2QWN0aW9uSXRlbS5vbigndGFwJywgdGhpcy50b2dnbGVEcmF3ZXIuYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIG5hdkFjdGlvbkl0ZW07XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZURyYXdlcigpIHtcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICB9XG59XG4iXX0=