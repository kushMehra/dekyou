import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, AfterContentInit, DoCheck, OnDestroy } from '@angular/core';
//import { BarcodeScanner } from "nativescript-barcodescanner";
//import { Router } from "@angular/router";
import * as dialogs from "ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { ProductModel } from "../shared/product.model";
//import * as utils from "utils/utils";

//import { getJSON } from 'tns-core-modules/http';
//import * as listViewModule from 'tns-core-modules/ui/list-view';

//var Firebase = require("nativescript-plugin-firebase-common").Firebase;

var firebase = require("./firebase").firebase;

@Component({
    selector: 'contact',
    templateUrl: 'modules/contact/contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
    text: string = 'Scan Page';
    barcode:string="";
    isSelected = 0;
    firstItem:ProductModel;
    itemList:ProductModel[] = [];

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit (): void {


        console.log("in init");
        console.log ("firebase " + firebase.child("items").key());

        firebase.on("value", (snapshot) => {
            console.log("test");
            console.log("the string is " + JSON.stringify(snapshot.val()));
            var data = snapshot.val();
            console.log("length " + data.length);
            for(var i=0;i<data.length;i++) {
                this.itemList.push(data[i]);
                console.log(this.itemList[i].name);
            }
        });

        this.firstItem = this.itemList[0];
    }

    ngAfterViewInit() {
        console.log("view init");

    }

    ngAfterContentInit() {

    }

    ngAfterContentChecked() {
        console.log("content checked");
    }

    ngOnDestroy() {
        console.log("destroy");
    }

    onItemTap(args) {
        this.isSelected = args.index;
        this.firstItem = this.itemList[args.index];
        console.log("Item Tapped at cell index: " + args.index);
    }

    viewLoaded(args) {
        this.firstItem = this.itemList[0];
    }

    onAddCart() {

        console.log("Scan function called here");

        dialogs.alert({
            title: this.firstItem.name,
            message: this.firstItem.name + " added to the shopping list",
            okButtonText: "Enjoy your purchase!"

        }).then(()=> {
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
    }
}
