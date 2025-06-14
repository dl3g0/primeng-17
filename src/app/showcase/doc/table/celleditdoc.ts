import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Code } from '@domain/code';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';

@Component({
    selector: 'cell-edit-doc',
    template: ` <app-docsectiontext>
            <p>In-cell editing is enabled by adding <i>pEditableColumn</i> directive to an editable cell that has a <i>p-cellEditor</i> helper component to define the input-output templates for the edit and view modes respectively.</p>
        </app-docsectiontext>
        <p-deferred-demo (load)="loadDemoData()">
            <div class="card">
                <p-table [value]="products" dataKey="id" [tableStyle]="{ 'min-width': '50rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th style="width:25%">Code</th>
                            <th style="width:25%">Name</th>
                            <th style="width:25%">Inventory Status</th>
                            <th style="width:25%">Price</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-product let-editing="editing">
                        <tr>
                            <td [pEditableColumn]="product.code" pEditableColumnField="code">
                                <p-cellEditor>
                                    <ng-template pTemplate="input">
                                        <input pInputText type="text" [(ngModel)]="product.code" />
                                    </ng-template>
                                    <ng-template pTemplate="output">
                                        {{ product.code }}
                                    </ng-template>
                                </p-cellEditor>
                            </td>
                            <td [pEditableColumn]="product.name" pEditableColumnField="name">
                                <p-cellEditor>
                                    <ng-template pTemplate="input">
                                        <input pInputText type="text" [(ngModel)]="product.name" required />
                                    </ng-template>
                                    <ng-template pTemplate="output">
                                        {{ product.name }}
                                    </ng-template>
                                </p-cellEditor>
                            </td>
                            <td [pEditableColumn]="product.inventoryStatus" pEditableColumnField="inventoryStatus">
                                <p-cellEditor>
                                    <ng-template pTemplate="input">
                                        <input pInputText [(ngModel)]="product.inventoryStatus" />
                                    </ng-template>
                                    <ng-template pTemplate="output">
                                        {{ product.inventoryStatus }}
                                    </ng-template>
                                </p-cellEditor>
                            </td>
                            <td [pEditableColumn]="product.price" pEditableColumnField="price">
                                <p-cellEditor>
                                    <ng-template pTemplate="input">
                                        <input pInputText type="text" [(ngModel)]="product.price" />
                                    </ng-template>
                                    <ng-template pTemplate="output">
                                        {{ product.price | currency: 'USD' }}
                                    </ng-template>
                                </p-cellEditor>
                            </td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>
        </p-deferred-demo>
        <app-code [code]="code" selector="table-cell-edit-demo" [extFiles]="extFiles"></app-code>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CellEditDoc {
    products!: Product[];

    constructor(
        private productService: ProductService,
        private cd: ChangeDetectorRef
    ) {}

    loadDemoData() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
            this.cd.markForCheck();
        });
    }

    code: Code = {
        basic: `<p-table
    [value]="products" dataKey="id"
    [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template pTemplate="header">
            <tr>
                <th style="width:25%">
                    Code
                </th>
                <th style="width:25%">
                    Name
                </th>
                <th style="width:25%">
                    Inventory Status
                </th>
                <th style="width:25%">
                    Price
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product let-editing="editing">
            <tr>
                <td [pEditableColumn]="product.code" pEditableColumnField="code">
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input
                                pInputText
                                type="text"
                                [(ngModel)]="product.code" />
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{ product.code }}
                        </ng-template>
                    </p-cellEditor>
                </td>
                <td [pEditableColumn]="product.name" pEditableColumnField="name">
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input
                                pInputText
                                type="text"
                                [(ngModel)]="product.name"
                                required />
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{ product.name }}
                        </ng-template>
                    </p-cellEditor>
                </td>
                <td [pEditableColumn]="product.inventoryStatus" pEditableColumnField="inventoryStatus">
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input
                                pInputText
                                [(ngModel)]="product.inventoryStatus" />
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{ product.inventoryStatus }}
                        </ng-template>
                    </p-cellEditor>
                </td>
                <td [pEditableColumn]="product.price" pEditableColumnField="price">
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input
                                pInputText type="text"
                                [(ngModel)]="product.price" />
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{ product.price | currency: 'USD' }}
                        </ng-template>
                    </p-cellEditor>
                </td>
            </tr>
        </ng-template>
</p-table>`,
        html: `<div class="card">
    <p-table
        [value]="products" dataKey="id"
        [tableStyle]="{ 'min-width': '50rem' }">
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:25%">
                        Code
                    </th>
                    <th style="width:25%">
                        Name
                    </th>
                    <th style="width:25%">
                        Inventory Status
                    </th>
                    <th style="width:25%">
                        Price
                    </th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-product let-editing="editing">
                <tr>
                    <td [pEditableColumn]="product.code" pEditableColumnField="code">
                        <p-cellEditor>
                            <ng-template pTemplate="input">
                                <input
                                    pInputText
                                    type="text"
                                    [(ngModel)]="product.code" />
                            </ng-template>
                            <ng-template pTemplate="output">
                                {{ product.code }}
                            </ng-template>
                        </p-cellEditor>
                    </td>
                    <td [pEditableColumn]="product.name" pEditableColumnField="name">
                        <p-cellEditor>
                            <ng-template pTemplate="input">
                                <input
                                    pInputText
                                    type="text"
                                    [(ngModel)]="product.name"
                                    required />
                            </ng-template>
                            <ng-template pTemplate="output">
                                {{ product.name }}
                            </ng-template>
                        </p-cellEditor>
                    </td>
                    <td [pEditableColumn]="product.inventoryStatus" pEditableColumnField="inventoryStatus">
                        <p-cellEditor>
                            <ng-template pTemplate="input">
                                <input
                                    pInputText
                                    [(ngModel)]="product.inventoryStatus" />
                            </ng-template>
                            <ng-template pTemplate="output">
                                {{ product.inventoryStatus }}
                            </ng-template>
                        </p-cellEditor>
                    </td>
                    <td [pEditableColumn]="product.price" pEditableColumnField="price">
                        <p-cellEditor>
                            <ng-template pTemplate="input">
                                <input
                                    pInputText type="text"
                                    [(ngModel)]="product.price" />
                            </ng-template>
                            <ng-template pTemplate="output">
                                {{ product.price | currency: 'USD' }}
                            </ng-template>
                        </p-cellEditor>
                    </td>
                </tr>
            </ng-template>
    </p-table>
</div>`,
        typescript: `import { Component, OnInit } from '@angular/core';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
import { TableModule } from '@dl3g0/primeng/table';
import { CommonModule } from '@angular/common';
import { InputTextModule } from '@dl3g0/primeng/inputtext';

@Component({
    selector: 'table-cell-edit-demo',
    templateUrl: 'table-cell-edit-demo.html',
    standalone: true,
    imports: [TableModule, InputTextModule, CommonModule],
    providers: [ProductService]
})
export class TableCellEditDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}`,
        data: `{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,
        scss: `
:host ::ng-deep .p-cell-editing {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}`,
        service: ['ProductService']
    };

    extFiles = [
        {
            path: 'src/domain/product.ts',
            content: `
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`
        }
    ];
}
