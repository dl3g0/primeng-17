import { Component } from '@angular/core';
import { MessageService } from '@dl3g0/primeng/api';
import { DialogService, DynamicDialogRef } from '@dl3g0/primeng/dynamicdialog';
import { Code } from '@domain/code';
import { Product } from '@domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    selector: 'close-doc',
    template: `
        <app-docsectiontext>
            <p>
                Most of the time, requirement is returning a value from the dialog. DialogRef's close method is used for this purpose where the parameter passed will be available at the <i>onClose</i> event at the caller. Here is an example on how to
                close the dialog from the ProductListDemo by passing a selected product.
            </p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    `,
    providers: [DialogService, MessageService],
    standalone: false
})
export class CloseDoc {
    constructor(
        public dialogService: DialogService,
        public messageService: MessageService
    ) {}

    ref: DynamicDialogRef | undefined;

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Select a Product',
            width: '70%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });

        this.ref.onClose.subscribe((product: Product) => {
            if (product) {
                this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
            }
        });
    }

    code: Code = {
        typescript: `
import { Component, Input } from '@angular/core';
import { MessageService } from '@dl3g0/primeng/api';
import { DialogService, DynamicDialogRef } from '@dl3g0/primeng/dynamicdialog';
import { Product } from '@domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService, MessageService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService, public messageService: MessageService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Select a Product',
            width: '70%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });

        this.ref.onClose.subscribe((product: Product) => {
            if (product) {
                this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
            }
        });
    }
}`
    };
}
