import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TreeNode } from '@dl3g0/primeng/api';
import { Code } from '@domain/code';
import { NodeService } from '@service/nodeservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'conditional-style-doc',
    template: `
        <app-docsectiontext>
            <p>Particular rows and cells can be styled based on conditions. The <i>ngClass</i> receives a row data as a parameter to return a style class for a row whereas cells are customized using the <i>body</i> template.</p>
        </app-docsectiontext>
        <div class="card">
            <p-deferred-demo (load)="loadDemoData()">
                <p-treeTable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
                    <ng-template pTemplate="header" let-columns>
                        <tr>
                            <th *ngFor="let col of columns">
                                {{ col.header }}
                            </th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
                        <tr [ttRow]="rowNode" [ngClass]="{ 'p-highlight': rowData.size.endsWith('kb') }">
                            <td *ngFor="let col of columns; let i = index" [ngClass]="{ 'font-bold': col.field === 'size' && rowData.size.endsWith('kb') }">
                                <p-treeTableToggler [rowNode]="rowNode" *ngIf="i === 0" />
                                {{ rowData[col.field] }}
                            </td>
                        </tr>
                    </ng-template>
                </p-treeTable>
            </p-deferred-demo>
        </div>
        <app-code [code]="code" selector="tree-table-conditional-style-demo"></app-code>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ConditionalStyleDoc {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    loadDemoData() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }

    code: Code = {
        basic: `<p-treeTable
    [value]="files"
    [columns]="cols"
    [scrollable]="true"
    [tableStyle]="{'min-width':'50rem'}">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode" [ngClass]="{ 'p-highlight': rowData.size.endsWith('kb') }">
                <td
                    *ngFor="let col of columns; let i = index"
                    [ngClass]="{ 'font-bold': col.field === 'size' && rowData.size.endsWith('kb') }">
                        <p-treeTableToggler [rowNode]="rowNode" *ngIf="i === 0" />
                        {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
</p-treeTable>`,

        html: `<div class="card">
    <p-treeTable
        [value]="files"
        [columns]="cols"
        [scrollable]="true"
        [tableStyle]="{'min-width':'50rem'}">
            <ng-template pTemplate="header" let-columns>
                <tr>
                    <th *ngFor="let col of columns">
                        {{ col.header }}
                    </th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
                <tr [ttRow]="rowNode" [ngClass]="{ 'p-highlight': rowData.size.endsWith('kb') }">
                    <td
                        *ngFor="let col of columns; let i = index"
                        [ngClass]="{ 'font-bold': col.field === 'size' && rowData.size.endsWith('kb') }">
                            <p-treeTableToggler [rowNode]="rowNode" *ngIf="i === 0" />
                            {{ rowData[col.field] }}
                    </td>
                </tr>
            </ng-template>
    </p-treeTable>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { TreeNode } from '@dl3g0/primeng/api';
import { NodeService } from '@service/nodeservice';
import { TreeTableModule } from '@dl3g0/primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-conditional-style-demo',
    templateUrl: './tree-table-conditional-style-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableConditionalStyleDemo implements OnInit{
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,

        service: ['NodeService']
    };
}
