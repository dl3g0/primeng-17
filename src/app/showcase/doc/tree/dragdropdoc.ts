import { Component, OnInit } from '@angular/core';
import { TreeDragDropService, TreeNode } from '@dl3g0/primeng/api';
import { Code } from '@domain/code';
import { NodeService } from '@service/nodeservice';

@Component({
    selector: 'drag-drop-doc',
    template: `
        <app-docsectiontext>
            <p>Nodes can be reordered within the same tree and also can be transferred between other trees using drag&drop.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-tree class="w-full md:w-30rem" [value]="files" [draggableNodes]="true" [droppableNodes]="true" draggableScope="self" droppableScope="self" />
        </div>
        <app-code [code]="code" selector="tree-drag-drop-demo"></app-code>
    `,
    providers: [TreeDragDropService],
    standalone: false
})
export class DragDropDoc implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }

    code: Code = {
        basic: `<p-tree
    class="w-full md:w-30rem"
    [value]="files"
    [draggableNodes]="true"
    [droppableNodes]="true"
    draggableScope="self"
    droppableScope="self" />`,

        html: `<div class="card flex justify-content-center">
    <p-tree
        class="w-full md:w-30rem"
        [value]="files"
        [draggableNodes]="true"
        [droppableNodes]="true"
        draggableScope="self"
        droppableScope="self" />
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { TreeDragDropService, TreeNode } from '@dl3g0/primeng/api';
import { NodeService } from '@service/nodeservice';
import { TreeModule } from '@dl3g0/primeng/tree';

@Component({
    selector: 'tree-drag-drop-demo',
    templateUrl: './tree-drag-drop-demo.html',
    standalone: true,
    imports: [TreeModule],
    providers: [TreeDragDropService, NodeService]
})
export class TreeDragDropDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
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
