"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { BarcodeScanner } from "nativescript-barcodescanner";
//import { Router } from "@angular/router";
var dialogs = require("ui/dialogs");
var router_1 = require("nativescript-angular/router");
//import * as utils from "utils/utils";
//import { getJSON } from 'tns-core-modules/http';
//import * as listViewModule from 'tns-core-modules/ui/list-view';
//var Firebase = require("nativescript-plugin-firebase-common").Firebase;
var firebase = require("./firebase").firebase;
var ContactComponent = (function () {
    function ContactComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.text = 'Scan Page';
        this.barcode = "";
        this.isSelected = 0;
        this.itemList = [];
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("in init");
        console.log("firebase " + firebase.child("items").key());
        firebase.on("value", function (snapshot) {
            console.log("test");
            console.log("the string is " + JSON.stringify(snapshot.val()));
            var data = snapshot.val();
            console.log("length " + data.length);
            for (var i = 0; i < data.length; i++) {
                _this.itemList.push(data[i]);
                console.log(_this.itemList[i].name);
            }
        });
        this.firstItem = this.itemList[0];
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
        console.log("view init");
    };
    ContactComponent.prototype.ngAfterContentInit = function () {
    };
    ContactComponent.prototype.ngAfterContentChecked = function () {
        console.log("content checked");
    };
    ContactComponent.prototype.ngOnDestroy = function () {
        console.log("destroy");
    };
    ContactComponent.prototype.onItemTap = function (args) {
        this.isSelected = args.index;
        this.firstItem = this.itemList[args.index];
        console.log("Item Tapped at cell index: " + args.index);
    };
    ContactComponent.prototype.viewLoaded = function (args) {
        this.firstItem = this.itemList[0];
    };
    ContactComponent.prototype.onAddCart = function () {
        console.log("Scan function called here");
        dialogs.alert({
            title: this.firstItem.name,
            message: this.firstItem.name + " added to the shopping list",
            okButtonText: "Enjoy your purchase!"
        }).then(function () {
            console.log("Dialog closed!");
        });
        /*let routeCommands = ['/shoppinglist', "add"];
        let currentUrl = this.routerExtensions.router.routerState.snapshot.url;
        let newUrlTree = this.routerExtensions.router.createUrlTree(routeCommands);
        let newUrl = this.routerExtensions.router.serializeUrl(newUrlTree);
        if (currentUrl !== newUrl) {
            this.routerExtensions.navigate(routeCommands,
                {
                    clearHistory: true,
                    animated: false
                });
        }*/
        /*this.drawer.on('drawerClosed', () => {
            this.ngZone.run(() => {
                this.routerExtensions.navigate(routeCommands,
                    {
                        clearHistory: true,
                        animated: false
                    });
                this.isContentVisible = true;
                this.drawer.off('drawerClosed');
            });
        });
    }      */
        /*this.barcodeScanner.scan({
                formats: "QR_CODE, EAN_13, CODE_39",
                cancelLabel: "EXIT. Also, try the volume buttons!",
                cancelLabelBackgroundColor: "#333333",
                message: "Use the volume buttons for extra light",
                showFlipCameraButton: false,
                preferFrontCamera: false,
                showTorchButton: true,
                beepOnScan: true,
                torchOn: false,
                closeCallback: () => {
                    if(this.barcode){
                        this.router.navigate(["items",this.barcode])}},
                resultDisplayDuration: 100,
                orientation: "landscape",
                openSettingsIfPermissionWasPreviouslyDenied: true})
            .then((result) => {
                    this.barcode  = result.text;
                    console.log(this.barcode);
                    if(this.barcode){
                        //this.router.navigate(["items",this.barcode])}
                        this.router.navigate(["home"])}
                }, (errorMessage) => {
                    console.log("No scan. " + errorMessage);
                }
            );*/
        //this.router.navigate([""]);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact',
        templateUrl: 'modules/contact/contact.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnSTtBQUNoSSwrREFBK0Q7QUFDL0QsMkNBQTJDO0FBQzNDLG9DQUFzQztBQUN0QyxzREFBK0Q7QUFFL0QsdUNBQXVDO0FBRXZDLGtEQUFrRDtBQUNsRCxrRUFBa0U7QUFFbEUseUVBQXlFO0FBRXpFLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFROUMsSUFBYSxnQkFBZ0I7SUFPekIsMEJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTnRELFNBQUksR0FBVyxXQUFXLENBQUM7UUFDM0IsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWYsYUFBUSxHQUFrQixFQUFFLENBQUM7SUFHN0IsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFrQkM7UUFmRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUUsV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUUxRCxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLFFBQVE7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsMENBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFN0IsQ0FBQztJQUVELDZDQUFrQixHQUFsQjtJQUVBLENBQUM7SUFFRCxnREFBcUIsR0FBckI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNWLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUV6QyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUMxQixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsNkJBQTZCO1lBQzVELFlBQVksRUFBRSxzQkFBc0I7U0FFdkMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNIOzs7Ozs7Ozs7O1dBVUc7UUFDQzs7Ozs7Ozs7Ozs7YUFXSztRQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXlCUTtRQUNKLDZCQUE2QjtJQUNyQyxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBeEhELElBd0hDO0FBeEhZLGdCQUFnQjtJQU41QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHdDQUF3QztRQUNyRCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNsRCxDQUFDO3FDQVN3Qyx5QkFBZ0I7R0FQN0MsZ0JBQWdCLENBd0g1QjtBQXhIWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcbi8vaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9kdWN0TW9kZWwgfSBmcm9tIFwiLi4vc2hhcmVkL3Byb2R1Y3QubW9kZWxcIjtcbi8vaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5cbi8vaW1wb3J0IHsgZ2V0SlNPTiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaHR0cCc7XG4vL2ltcG9ydCAqIGFzIGxpc3RWaWV3TW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3JztcblxuLy92YXIgRmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS1jb21tb25cIikuRmlyZWJhc2U7XG5cbnZhciBmaXJlYmFzZSA9IHJlcXVpcmUoXCIuL2ZpcmViYXNlXCIpLmZpcmViYXNlO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICB0ZXh0OiBzdHJpbmcgPSAnU2NhbiBQYWdlJztcbiAgICBiYXJjb2RlOnN0cmluZz1cIlwiO1xuICAgIGlzU2VsZWN0ZWQgPSAwO1xuICAgIGZpcnN0SXRlbTpQcm9kdWN0TW9kZWw7XG4gICAgaXRlbUxpc3Q6UHJvZHVjdE1vZGVsW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpOiB2b2lkIHtcblxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gaW5pdFwiKTtcbiAgICAgICAgY29uc29sZS5sb2cgKFwiZmlyZWJhc2UgXCIgKyBmaXJlYmFzZS5jaGlsZChcIml0ZW1zXCIpLmtleSgpKTtcblxuICAgICAgICBmaXJlYmFzZS5vbihcInZhbHVlXCIsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgc3RyaW5nIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkoc25hcHNob3QudmFsKCkpKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gc25hcHNob3QudmFsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBcIiArIGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8ZGF0YS5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5wdXNoKGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbUxpc3RbaV0ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmlyc3RJdGVtID0gdGhpcy5pdGVtTGlzdFswXTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmlldyBpbml0XCIpO1xuXG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRlbnQgY2hlY2tlZFwiKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkZXN0cm95XCIpO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGFyZ3MuaW5kZXg7XG4gICAgICAgIHRoaXMuZmlyc3RJdGVtID0gdGhpcy5pdGVtTGlzdFthcmdzLmluZGV4XTtcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXgpO1xuICAgIH1cblxuICAgIHZpZXdMb2FkZWQoYXJncykge1xuICAgICAgICB0aGlzLmZpcnN0SXRlbSA9IHRoaXMuaXRlbUxpc3RbMF07XG4gICAgfVxuXG4gICAgb25BZGRDYXJ0KCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NhbiBmdW5jdGlvbiBjYWxsZWQgaGVyZVwiKTtcblxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmZpcnN0SXRlbS5uYW1lLFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5maXJzdEl0ZW0ubmFtZSArIFwiIGFkZGVkIHRvIHRoZSBzaG9wcGluZyBsaXN0XCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiRW5qb3kgeW91ciBwdXJjaGFzZSFcIlxuXG4gICAgICAgIH0pLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLypsZXQgcm91dGVDb21tYW5kcyA9IFsnL3Nob3BwaW5nbGlzdCcsIFwiYWRkXCJdO1xuICAgICAgICBsZXQgY3VycmVudFVybCA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsO1xuICAgICAgICBsZXQgbmV3VXJsVHJlZSA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIuY3JlYXRlVXJsVHJlZShyb3V0ZUNvbW1hbmRzKTtcbiAgICAgICAgbGV0IG5ld1VybCA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIuc2VyaWFsaXplVXJsKG5ld1VybFRyZWUpO1xuICAgICAgICBpZiAoY3VycmVudFVybCAhPT0gbmV3VXJsKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUocm91dGVDb21tYW5kcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0qL1xuICAgICAgICAgICAgLyp0aGlzLmRyYXdlci5vbignZHJhd2VyQ2xvc2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShyb3V0ZUNvbW1hbmRzLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ29udGVudFZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdlci5vZmYoJ2RyYXdlckNsb3NlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gICAgICAqL1xuICAgICAgICAvKnRoaXMuYmFyY29kZVNjYW5uZXIuc2Nhbih7XG4gICAgICAgICAgICAgICAgZm9ybWF0czogXCJRUl9DT0RFLCBFQU5fMTMsIENPREVfMzlcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxMYWJlbDogXCJFWElULiBBbHNvLCB0cnkgdGhlIHZvbHVtZSBidXR0b25zIVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbExhYmVsQmFja2dyb3VuZENvbG9yOiBcIiMzMzMzMzNcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVzZSB0aGUgdm9sdW1lIGJ1dHRvbnMgZm9yIGV4dHJhIGxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgICAgIHByZWZlckZyb250Q2FtZXJhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93VG9yY2hCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0b3JjaE9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjbG9zZUNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYmFyY29kZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJpdGVtc1wiLHRoaXMuYmFyY29kZV0pfX0sXG4gICAgICAgICAgICAgICAgcmVzdWx0RGlzcGxheUR1cmF0aW9uOiAxMDAsXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwibGFuZHNjYXBlXCIsXG4gICAgICAgICAgICAgICAgb3BlblNldHRpbmdzSWZQZXJtaXNzaW9uV2FzUHJldmlvdXNseURlbmllZDogdHJ1ZX0pXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyY29kZSAgPSByZXN1bHQudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5iYXJjb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5iYXJjb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaXRlbXNcIix0aGlzLmJhcmNvZGVdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0pfVxuICAgICAgICAgICAgICAgIH0sIChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBzY2FuLiBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTsqL1xuICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cbn1cbiJdfQ==