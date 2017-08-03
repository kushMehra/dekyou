"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ShoppingListComponent = (function () {
    function ShoppingListComponent() {
        this.selectedItemIndex = 0;
        this.itemList = [
            { code: "0", name: "Apple", description: "10", price: "1" },
            { code: "1", name: "Banana", description: "9", price: "2" },
            { code: "2", name: "Orange", description: "8", price: "3" },
            { code: "3", name: "Pear", description: "7", price: "4" },
            { code: "4", name: "Cashew", description: "6", price: "5" },
            { code: "5", name: "Chocolate", description: "5", price: "6" }
        ];
        this.action = "";
        this.isLoading = true;
    }
    ShoppingListComponent.prototype.onItemTap = function (args) {
        this.selectedItem = this.itemList[args.index];
        this.selectedItemIndex = args.index;
        console.log("Item Tapped at cell index: " + args.index);
    };
    ShoppingListComponent.prototype.onRemoveItem = function (args) {
        console.log("item removed " + this.selectedItemIndex);
        this.selectedItem = this.itemList[this.selectedItemIndex + 1];
        this.itemList.splice(this.selectedItemIndex, 1);
    };
    ShoppingListComponent.prototype.viewLoaded = function (args) {
        console.log("viewLoaded " + this.itemList[0].name);
        this.selectedItem = this.itemList[0];
    };
    /*    constructor(
            private route: ActivatedRoute,
            private router: RouterExtensions,
            private item:ProductModel
        ) {
            route.params.subscribe((params)=>{
                this.action = params["item"];
                //  console.log(this.action);
            });
    
            if(router.router.routerState.snapshot.url.includes("add")){
                this.itemList.push(item);
            }
    
            //console.log ("shopping list router " + this.itemList[0].description);
            //console.log ("shopping list item " + item.code);
        }*/
    ShoppingListComponent.prototype.ngOnInit = function () { };
    return ShoppingListComponent;
}());
ShoppingListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-shopping-list',
        templateUrl: './shopping-list.component.html',
        styleUrls: ['./shopping-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], ShoppingListComponent);
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9wcGluZy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQVl6RSxJQUFhLHFCQUFxQjtJQW1COUI7UUFiQSxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFrQjtZQUN0QixFQUFDLElBQUksRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxHQUFHLEVBQUM7WUFDckQsRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFDO1lBQ3JELEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFFLFdBQVcsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLEdBQUcsRUFBQztZQUNyRCxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxHQUFHLEVBQUM7WUFDbkQsRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFDO1lBQ3JELEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLEdBQUcsRUFBQztTQUMzRCxDQUFDO1FBQ0YsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUVaLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFFVCxDQUFDO0lBRWpCLHlDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsNENBQVksR0FBWixVQUFhLElBQUk7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVwRCxDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLElBQUk7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBR0w7Ozs7Ozs7Ozs7Ozs7Ozs7V0FnQk87SUFFSCx3Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUdsQiw0QkFBQztBQUFELENBQUMsQUE3REQsSUE2REM7QUE3RFkscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO0tBQy9DLENBQUM7O0dBQ1cscUJBQXFCLENBNkRqQztBQTdEWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUHJvZHVjdE1vZGVsIH0gZnJvbSBcIi4uL3NoYXJlZC9wcm9kdWN0Lm1vZGVsXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLXNob3BwaW5nLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLy9AVmlld0NoaWxkKCdzY3JvbGxWaWV3Jykgc2Nyb2xsVmlldzogRWxlbWVudFJlZlxuICAgIFxuICAgIC8vaXRlbUxpc3Q6IFByb2R1Y3RNb2RlbFtdID0gW107XG4gICAgc2VsZWN0ZWRJdGVtOiBQcm9kdWN0TW9kZWw7XG4gICAgc2VsZWN0ZWRJdGVtSW5kZXggPSAwO1xuICAgIGl0ZW1MaXN0OlByb2R1Y3RNb2RlbFtdID0gW1xuICAgICAgICB7Y29kZTpcIjBcIiwgbmFtZTpcIkFwcGxlXCIsIGRlc2NyaXB0aW9uOlwiMTBcIiwgcHJpY2U6XCIxXCJ9LFxuICAgICAgICB7Y29kZTpcIjFcIiwgbmFtZTpcIkJhbmFuYVwiLCBkZXNjcmlwdGlvbjpcIjlcIiwgcHJpY2U6XCIyXCJ9LFxuICAgICAgICB7Y29kZTpcIjJcIiwgbmFtZTpcIk9yYW5nZVwiLCBkZXNjcmlwdGlvbjpcIjhcIiwgcHJpY2U6XCIzXCJ9LFxuICAgICAgICB7Y29kZTpcIjNcIiwgbmFtZTpcIlBlYXJcIiwgZGVzY3JpcHRpb246XCI3XCIsIHByaWNlOlwiNFwifSxcbiAgICAgICAge2NvZGU6XCI0XCIsIG5hbWU6XCJDYXNoZXdcIiwgZGVzY3JpcHRpb246XCI2XCIsIHByaWNlOlwiNVwifSxcbiAgICAgICAge2NvZGU6XCI1XCIsIG5hbWU6XCJDaG9jb2xhdGVcIiwgZGVzY3JpcHRpb246XCI1XCIsIHByaWNlOlwiNlwifVxuICAgIF07XG4gICAgYWN0aW9uOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHJpdmF0ZSBpc0xvYWRpbmcgPSB0cnVlO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBvbkl0ZW1UYXAoYXJncykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbUxpc3RbYXJncy5pbmRleF07XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSBhcmdzLmluZGV4O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCk7XG4gICAgfVxuICAgIFxuICAgIG9uUmVtb3ZlSXRlbShhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbSByZW1vdmVkIFwiICsgdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCApO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbUxpc3RbdGhpcy5zZWxlY3RlZEl0ZW1JbmRleCArIDFdO1xuICAgICAgICB0aGlzLml0ZW1MaXN0LnNwbGljZSh0aGlzLnNlbGVjdGVkSXRlbUluZGV4LCAxKTtcblxuICAgIH1cblxuICAgIHZpZXdMb2FkZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcInZpZXdMb2FkZWQgXCIgKyB0aGlzLml0ZW1MaXN0WzBdLm5hbWUpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbUxpc3RbMF07XG4gICAgfVxuICAgIFxuXG4vKiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGl0ZW06UHJvZHVjdE1vZGVsXG4gICAgKSB7XG4gICAgICAgIHJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gcGFyYW1zW1wiaXRlbVwiXTtcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyh0aGlzLmFjdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKHJvdXRlci5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsLmluY2x1ZGVzKFwiYWRkXCIpKXtcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucHVzaChpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29uc29sZS5sb2cgKFwic2hvcHBpbmcgbGlzdCByb3V0ZXIgXCIgKyB0aGlzLml0ZW1MaXN0WzBdLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyAoXCJzaG9wcGluZyBsaXN0IGl0ZW0gXCIgKyBpdGVtLmNvZGUpO1xuICAgIH0qL1xuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuXG59XG4iXX0=