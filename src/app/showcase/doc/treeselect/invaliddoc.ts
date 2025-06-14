import { Component } from '@angular/core';
import { Code } from '@domain/code';
import { NodeService } from '@service/nodeservice';

@Component({
    selector: 'invalid-doc',
    template: `
        <app-docsectiontext>
            <p>Invalid state style is added using the <i>ng-invalid</i> and <i>ng-dirty</i> class to indicate a failed validation.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-treeSelect class="md:w-20rem w-full ng-invalid ng-dirty" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" />
        </div>
        <app-code [code]="code" selector="tree-select-invalid-demo"></app-code>
    `,
    standalone: false
})
export class InvalidDoc {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }

    code: Code = {
        basic: `<p-treeSelect
    class="md:w-20rem w-full ng-invalid ng-dirty"
    containerStyleClass="w-full"
    [(ngModel)]="selectedNodes"
    [options]="nodes"
    placeholder="Select Item" />`,

        html: `<div class="card flex justify-content-center">
    <p-treeSelect
        class="md:w-20rem w-full ng-invalid ng-dirty"
        containerStyleClass="w-full"
        [(ngModel)]="selectedNodes"
        [options]="nodes"
        placeholder="Select Item" />
</div>`,

        typescript: `import { Component } from '@angular/core';
import { NodeService } from '@service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelectModule } from '@dl3g0/primeng/treeselect';

@Component({
    selector: 'tree-select-invalid-demo',
    templateUrl: './tree-select-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelectModule],
    providers: [NodeService]
})
export class TreeSelectInvalidDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,

        service: ['NodeService'],

        data: `
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`
    };
}
