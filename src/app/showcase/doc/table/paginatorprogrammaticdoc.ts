import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Code } from '@domain/code';
import { Customer } from '@domain/customer';
import { CustomerService } from '@service/customerservice';

@Component({
    selector: 'paginator-programmatic-doc',
    template: `
        <app-docsectiontext>
            <p>Paginator can also be controlled via model using a binding to the <i>first</i> property where changes trigger a pagination.</p>
        </app-docsectiontext>
        <p-deferred-demo (load)="loadDemoData()">
            <div class="card">
                <div class="mb-3 flex gap-1">
                    <p-button type="button" icon="pi pi-chevron-left" (onClick)="prev()" [disabled]="isFirstPage()" styleClass="p-button-text" />
                    <p-button type="button" icon="pi pi-refresh" (onClick)="reset()" styleClass="p-button-text" />
                    <p-button type="button" icon="pi pi-chevron-right" (onClick)="next()" [disabled]="isLastPage()" styleClass="p-button-text" />
                </div>
                <p-table
                    [value]="customers"
                    [paginator]="true"
                    [rows]="rows"
                    [showCurrentPageReport]="true"
                    [first]="first"
                    [tableStyle]="{ 'min-width': '50rem' }"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    (onPage)="pageChange($event)"
                    [rowsPerPageOptions]="[10, 25, 50]"
                >
                    <ng-template pTemplate="header">
                        <tr>
                            <th style="width:25%">Name</th>
                            <th style="width:25%">Country</th>
                            <th style="width:25%">Company</th>
                            <th style="width:25%">Representative</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-customer>
                        <tr>
                            <td>{{ customer.name }}</td>
                            <td>{{ customer.country.name }}</td>
                            <td>{{ customer.company }}</td>
                            <td>{{ customer.representative.name }}</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>
        </p-deferred-demo>
        <app-code [code]="code" selector="table-paginator-programmatic-demo" [extFiles]="extFiles"></app-code>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PaginatorProgrammaticDoc {
    customers!: Customer[];

    first = 0;

    rows = 10;

    constructor(
        private customerService: CustomerService,
        private cd: ChangeDetectorRef
    ) {}

    loadDemoData() {
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers = customers;
            this.cd.markForCheck();
        });
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    pageChange(event) {
        this.first = event.first;
        this.rows = event.rows;
    }

    isLastPage(): boolean {
        return this.customers ? this.first + this.rows >= this.customers.length : true;
    }

    isFirstPage(): boolean {
        return this.customers ? this.first === 0 : true;
    }

    code: Code = {
        basic: `<div class="mb-3">
    <p-button
        type="button"
        icon="pi pi-chevron-left"
        (onClick)="prev()"
        [disabled]="isFirstPage()"
        styleClass="p-button-text" />
    <p-button
        type="button"
        icon="pi pi-refresh"
        (onClick)="reset()"
        styleClass="p-button-text" />
    <p-button
        type="button"
        icon="pi pi-chevron-right"
        (onClick)="next()"
        [disabled]="isLastPage()"
        styleClass="p-button-text" />
</div>
<p-table
    [value]="customers"
    [paginator]="true"
    [rows]="5"
    [first]="first"
    [showCurrentPageReport]="true"
    [tableStyle]="{ 'min-width': '50rem' }"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    (onPage)="pageChange($event)"
    [rowsPerPageOptions]="[10, 25, 50]"
>
    <ng-template pTemplate="header">
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:25%">Country</th>
            <th style="width:25%">Company</th>
            <th style="width:25%">Representative</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="paginatorleft">
        <p-button type="button" icon="pi pi-plus" styleClass="p-button-text" />
    </ng-template>
    <ng-template pTemplate="paginatorright">
        <p-button type="button" icon="pi pi-cloud" styleClass="p-button-text" />
    </ng-template>
</p-table>`,
        html: `<div class="mb-3">
    <p-button
        type="button"
        icon="pi pi-chevron-left"
        (onClick)="prev()"
        [disabled]="isFirstPage()"
        styleClass="p-button-text" />
    <p-button
        type="button"
        icon="pi pi-refresh"
        (onClick)="reset()"
        styleClass="p-button-text" />
    <p-button
        type="button"
        icon="pi pi-chevron-right"
        (onClick)="next()"
        [disabled]="isLastPage()"
        styleClass="p-button-text" />
</div>
<div class="card">
    <p-table
        [value]="customers"
        [paginator]="true"
        [rows]="5"
        [first]="first"
        [showCurrentPageReport]="true"
        [tableStyle]="{ 'min-width': '50rem' }"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        (onPage)="pageChange($event)"
        [rowsPerPageOptions]="[10, 25, 50]"
    >
        <ng-template pTemplate="header">
            <tr>
                <th style="width:25%">Name</th>
                <th style="width:25%">Country</th>
                <th style="width:25%">Company</th>
                <th style="width:25%">Representative</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td>{{ customer.name }}</td>
                <td>{{ customer.country.name }}</td>
                <td>{{ customer.company }}</td>
                <td>{{ customer.representative.name }}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="paginatorleft">
            <p-button type="button" icon="pi pi-plus" styleClass="p-button-text" />
        </ng-template>
        <ng-template pTemplate="paginatorright">
            <p-button type="button" icon="pi pi-cloud" styleClass="p-button-text" />
        </ng-template>
    </p-table>
</div>`,
        typescript: `import { Component } from '@angular/core';
import { Customer } from '@domain/customer';
import { CustomerService } from '@service/customerservice';
import { TableModule } from '@dl3g0/primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@dl3g0/primeng/button';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'table-paginator-programmatic-demo',
    templateUrl: 'table-paginator-programmatic-demo.html',
    standalone: true,
    imports: [TableModule, CommonModule, ButtonModule, HttpClientModule],
    providers: [CustomerService]
})
export class TablePaginatorProgrammaticDemo {
    customers!: Customer[];

    first = 0;

    rows = 10;

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    pageChange(event) {
        this.first = event.first;
        this.rows = event.rows;
    }

    isLastPage(): boolean {
        return this.customers ? this.first === this.customers.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.customers ? this.first === 0 : true;
    }
}`,
        data: `{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,
        service: ['CustomerService']
    };

    extFiles = [
        {
            path: 'src/domain/customer.ts',
            content: `
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`
        }
    ];
}
