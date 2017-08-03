import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from "@angular/router";
import { ProductModel } from "../shared/product.model";


@Component({
    moduleId: module.id,
    selector: 'ns-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    //@ViewChild('scrollView') scrollView: ElementRef
    
    //itemList: ProductModel[] = [];
    selectedItem: ProductModel;
    selectedItemIndex = 0;
    itemList:ProductModel[] = [
        {code:"0", name:"Apple", description:"10", price:"1"},
        {code:"1", name:"Banana", description:"9", price:"2"},
        {code:"2", name:"Orange", description:"8", price:"3"},
        {code:"3", name:"Pear", description:"7", price:"4"},
        {code:"4", name:"Cashew", description:"6", price:"5"},
        {code:"5", name:"Chocolate", description:"5", price:"6"}
    ];
    action: string = "";

    private isLoading = true;
    
    constructor() { }

    onItemTap(args) {
        this.selectedItem = this.itemList[args.index];
        this.selectedItemIndex = args.index;
        console.log("Item Tapped at cell index: " + args.index);
    }
    
    onRemoveItem(args) {
        console.log("item removed " + this.selectedItemIndex );
        this.selectedItem = this.itemList[this.selectedItemIndex + 1];
        this.itemList.splice(this.selectedItemIndex, 1);

    }

    viewLoaded(args) {
        console.log("viewLoaded " + this.itemList[0].name);
        this.selectedItem = this.itemList[0];
    }
    

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

    ngOnInit() { }


}
